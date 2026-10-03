#!/usr/bin/env node
/**
 * sync-tokens.mjs - reconcile this package's brand tokens with the DesignFlow
 * (BrandPilot) export API, the canonical token source for the app-redesign
 * pipeline.
 *
 * Usage:
 *   node scripts/sync-tokens.mjs            # check: report drift, exit 1 if any
 *   node scripts/sync-tokens.mjs --write    # rewrite drifted var values in place
 *
 * Config: designflow.sync.json in the package root:
 *   {
 *     "system": "zeebrar",              // brand name/alias on the API
 *     "api": "https://brandpilot.dev",
 *     "target": "src/styles.css",
 *     "prefix": "zb-",                  // package var = --<prefix><api var name>
 *     "map": {},                        // optional overrides: apiName -> packageVarName
 *     "ignore": []                      // optional "mode:apiName" entries excluded from
 *   }                                   // comparison (documented, deliberate divergences)
 *
 * Only variables the API serves are compared/updated; package-only vars
 * (extra shades, component vars) are never touched. Colors are compared
 * normalized (hsl triplet vs hex), and written back in the package's
 * existing format. Needs the owner token (see ownerToken below).
 * Node 18+ (built-in fetch), no dependencies.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { homedir } from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WRITE = process.argv.includes('--write');

const cfg = JSON.parse(readFileSync(path.join(ROOT, 'designflow.sync.json'), 'utf8'));
for (const key of ['system', 'api', 'target', 'prefix']) {
  if (cfg[key] === undefined) {
    console.error(`designflow.sync.json is missing "${key}"`);
    process.exit(2);
  }
}

const BLOCK_RE = /(:root|\.dark|@media[^{]*prefers-color-scheme:\s*dark[^{]*\{\s*:root)\s*\{([^}]*)\}/g;
const VAR_RE = /--([\w-]+)\s*:\s*([^;]+);/g;

/** First-value-wins CSS custom property maps for light and dark blocks. */
function parseVars(css) {
  const out = { light: {}, dark: {} };
  for (const m of css.matchAll(BLOCK_RE)) {
    const mode = m[1] === ':root' ? 'light' : 'dark';
    for (const v of m[2].matchAll(VAR_RE)) {
      if (v[2].includes('var(')) continue;
      if (out[mode][v[1]] === undefined) out[mode][v[1]] = v[2].trim();
    }
  }
  return out;
}

/** shadcn "H S% L%" triplet -> #rrggbb, or null if not a triplet. */
function hslTripletToHex(value) {
  const m = value.trim().match(/^([\d.]+)\s+([\d.]+)%\s+([\d.]+)%$/);
  if (!m) return null;
  const h = Number(m[1]) / 360;
  const s = Number(m[2]) / 100;
  const l = Number(m[3]) / 100;
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const hex = (x) => Math.round(x * 255).toString(16).padStart(2, '0');
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}

/** Normalize for comparison: hex lowercased/expanded, hsl triplets -> hex,
 *  rem -> px (1rem = 16px), else collapsed lowercase. */
function normalize(value) {
  const s = value.trim().replace(/\s+/g, ' ');
  const short = s.match(/^#([0-9a-f]{3})$/i);
  if (short) return '#' + [...short[1].toLowerCase()].map((c) => c + c).join('');
  if (/^#[0-9a-f]{6}$/i.test(s)) return s.toLowerCase();
  const rem = s.match(/^([\d.]+)rem$/);
  if (rem) return `${parseFloat(rem[1]) * 16}px`;
  return hslTripletToHex(s) ?? s.toLowerCase();
}

// Owner-fleet bearer: the owner's syncs must not count as external adoption
// (public useCount) and must still reach systems curated private. Token from
// env ADOPTION_OWNER_TOKEN, else ~/.claude/credentials/designflow-adoption.json
// field "token"; never printed, never written into designflow.sync.json. The
// server marks an honoured bearer with x-brandpilot-owner-fleet: 1 - without
// it this exits instead of syncing as an anonymous caller. Same contract as
// app-dev lib/designflow-owner-fetch.mjs, inlined so the package has no deps.
function ownerToken() {
  const fromEnv = process.env.ADOPTION_OWNER_TOKEN?.trim();
  if (fromEnv) return fromEnv;
  try {
    const { token } = JSON.parse(readFileSync(path.join(homedir(), '.claude/credentials/designflow-adoption.json'), 'utf8'));
    if (typeof token === 'string' && token.trim()) return token.trim();
  } catch {
    // missing or unreadable file: reported by the caller
  }
  return null;
}

const token = ownerToken();
if (!token) {
  console.error('FAIL: no DesignFlow owner token - set ADOPTION_OWNER_TOKEN or add "token" to ~/.claude/credentials/designflow-adoption.json');
  process.exit(2);
}

const url = `${cfg.api}/api/systems/export/${cfg.system}?format=globals-css`;
const res = await fetch(url, { redirect: 'follow', headers: { Authorization: `Bearer ${token}` } });
if (!res.ok) {
  console.error(`FAIL: HTTP ${res.status} from ${url}`);
  if (res.status === 404) console.error('A private system answers 404 when the owner token is not honoured - check the token before the system name.');
  process.exit(2);
}
if (res.headers.get('x-brandpilot-owner-fleet') !== '1') {
  console.error(`FAIL: ${url} answered without x-brandpilot-owner-fleet: 1 - the owner token was not honoured (wrong or retired token, or the server has no ADOPTION_OWNER_TOKEN)`);
  process.exit(2);
}
const apiCss = await res.text();
const systemUpdatedAt = res.headers.get('x-system-updated-at'); // absent on older deployments

const targetPath = path.join(ROOT, cfg.target);
const pkgCss = readFileSync(targetPath, 'utf8');
const api = parseVars(apiCss);
const pkg = parseVars(pkgCss);

const ignore = new Set(cfg.ignore ?? []);
const drift = [];
const apiOnly = [];
let inSync = 0;
let ignored = 0;
for (const mode of ['light', 'dark']) {
  for (const [name, apiValue] of Object.entries(api[mode])) {
    if (ignore.has(`${mode}:${name}`)) {
      ignored += 1;
      continue;
    }
    const pkgName = cfg.map?.[name] ?? `${cfg.prefix}${name}`;
    const pkgValue = pkg[mode][pkgName];
    if (pkgValue === undefined) {
      apiOnly.push(`${mode}:--${pkgName}`);
      continue;
    }
    if (normalize(pkgValue) === normalize(apiValue)) {
      inSync += 1;
      continue;
    }
    drift.push({ mode, pkgName, pkgValue, apiValue });
  }
}

// A prefix/map misconfiguration makes every API var miss the package lookup,
// which would otherwise read as a false "in sync" (0 drift). Fail loud instead.
const apiVarCount = Object.keys(api.light).length + Object.keys(api.dark).length;
if (apiVarCount > 0 && inSync === 0 && drift.length === 0) {
  console.error(
    `FAIL: none of the ${apiVarCount} API vars matched a package var — ` +
    `check "prefix"/"map" in designflow.sync.json (current prefix: "${cfg.prefix}")`
  );
  process.exit(2);
}

console.log(`system=${cfg.system}  source=${url}`);
if (systemUpdatedAt) console.log(`system updatedAt: ${systemUpdatedAt}`);
console.log(`in sync: ${inSync}   drifted: ${drift.length}   ignored: ${ignored}   served-but-absent-in-package: ${apiOnly.length}`);
for (const d of drift) {
  console.log(`  DRIFT [${d.mode}] --${d.pkgName}: package="${d.pkgValue}"  api="${d.apiValue}"`);
}
if (apiOnly.length) console.log(`  absent in package (informational): ${apiOnly.join(', ')}`);

if (!WRITE) process.exit(drift.length ? 1 : 0);

if (drift.length === 0) {
  console.log('Nothing to write - package matches the API.');
  process.exit(0);
}

// --write: replace drifted values inside the matching blocks, preserving the
// package's value format (hex stays hex even when the API serves a triplet).
let out = pkgCss;
const blocks = [...out.matchAll(BLOCK_RE)].reverse(); // splice from the end so indices stay valid
for (const m of blocks) {
  const mode = m[1] === ':root' ? 'light' : 'dark';
  let body = m[2];
  for (const d of drift) {
    if (d.mode !== mode) continue;
    const isPkgHex = /^#[0-9a-f]{3,8}$/i.test(d.pkgValue);
    const apiAsHex = hslTripletToHex(d.apiValue);
    const newValue = isPkgHex && apiAsHex ? apiAsHex : d.apiValue;
    const varRe = new RegExp(`(--${d.pkgName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:\\s*)[^;]+;`);
    body = body.replace(varRe, `$1${newValue};`);
  }
  const bodyStart = m.index + m[0].length - 1 - m[2].length;
  out = out.slice(0, bodyStart) + body + out.slice(bodyStart + m[2].length);
}

const stamp = `/* designflow-sync: system=${cfg.system} fetchedAt=${new Date().toISOString()} sha256=${createHash('sha256').update(apiCss).digest('hex').slice(0, 16)}${systemUpdatedAt ? ` systemUpdatedAt=${systemUpdatedAt}` : ''} */`;
out = /^\/\* designflow-sync:.*\*\/\n/.test(out)
  ? out.replace(/^\/\* designflow-sync:.*\*\/\n/, `${stamp}\n`)
  : `${stamp}\n${out}`;

writeFileSync(targetPath, out);
console.log(`Wrote ${drift.length} updated value(s) to ${cfg.target}.`);
