// Fetched from design project e77fde1e - the approved hero animation (verbatim below the notes).
// Engine deps (window.*): SceneStage(scenes,playback loop), interpolate(inputRange,outputRange,easing), Easing.*, clamp, useTweaks/TweaksPanel (design-time only - DROP at port).
// Scenes+durations: Propose 2.2s -> Review 1.7s -> Approve 2.5s -> Clear 1.3s, loop. Stage 1280x720.
// PORT NOTES: dark mode from next-themes resolvedTheme (replace tweaks); drop TweaksPanel + window.* globals; replace SceneStage with a rAF scene player (sum durations, map elapsed -> {scene, progress}, loop); respect prefers-reduced-motion (render a static published/approved frame, no rAF); the cursor/button coordinate space can be container-relative px instead of the 1280x720 normalize; keep Frame/Cursor/scene JSX and the inline CSS_TEXT tokens as-is (self-contained by design).

const { SceneStage, interpolate, Easing, clamp,
        useTweaks, TweaksPanel, TweakSection, TweakToggle } = window;

const HeroTheme = React.createContext(false);
const useHeroDark = () => React.useContext(HeroTheme);

const lerp = (a, b, t) => a + (b - a) * t;

const CSS_TEXT = `
.hero-fx {
  --launchwp-background: 0 0% 100%;
  --launchwp-foreground: 228 28% 8%;
  --launchwp-card: 0 0% 100%;
  --launchwp-card-foreground: 228 28% 8%;
  --launchwp-primary: 221 83% 53%;
  --launchwp-primary-foreground: 0 0% 100%;
  --launchwp-muted: 228 20% 96%;
  --launchwp-muted-foreground: 220 9% 46%;
  --launchwp-accent: 221 100% 97%;
  --launchwp-accent-foreground: 221 83% 48%;
  --launchwp-destructive: 0 72% 51%;
  --launchwp-destructive-foreground: 0 0% 100%;
  --launchwp-border: 228 24% 91%;
  --launchwp-success: 142 71% 45%;
  --launchwp-success-foreground: 0 0% 100%;
  --launchwp-warning: 38 92% 50%;
  --launchwp-warning-bg: 48 96% 89%;
  --launchwp-warning-foreground: 228 28% 8%;
  --launchwp-info: 188 86% 43%;
  --launchwp-radius-sm: 0.25rem;
  --launchwp-radius-md: 0.375rem;
  --launchwp-radius-lg: 0.5rem;
  --launchwp-radius-full: 9999px;
  --launchwp-font-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --launchwp-font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}
.hero-fx.hero-dark {
  --launchwp-background: 240 20% 4%;
  --launchwp-foreground: 228 20% 95%;
  --launchwp-card: 234 16% 9%;
  --launchwp-card-foreground: 228 20% 95%;
  --launchwp-primary: 221 88% 64%;
  --launchwp-muted: 234 16% 11%;
  --launchwp-muted-foreground: 228 14% 61%;
  --launchwp-accent: 221 38% 19%;
  --launchwp-accent-foreground: 221 88% 73%;
  --launchwp-destructive: 0 84% 60%;
  --launchwp-border: 234 20% 18%;
  --launchwp-success: 142 68% 52%;
  --launchwp-warning: 38 92% 58%;
  --launchwp-warning-bg: 38 60% 20%;
  --launchwp-warning-foreground: 38 92% 88%;
  --launchwp-info: 188 80% 52%;
}
.hero-fx, .hero-fx * { box-sizing: border-box; }
.hero-fx .launchwp-approval-card {
  font-family: var(--launchwp-font-sans);
  display: flex; flex-direction: column; gap: 12px;
  padding: 18px 20px; border: 1px solid hsl(var(--launchwp-border));
  border-left: 3px solid hsl(var(--launchwp-primary));
  border-radius: var(--launchwp-radius-lg); background: hsl(var(--launchwp-card));
  color: hsl(var(--launchwp-card-foreground));
}
.hero-fx .launchwp-approval-card__head { display: flex; align-items: center; gap: 10px; }
.hero-fx .launchwp-approval-card__kind {
  font-family: var(--launchwp-font-mono); font-size: 11px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.04em; padding: 3px 9px;
  border-radius: var(--launchwp-radius-sm);
  background: hsl(var(--launchwp-accent)); color: hsl(var(--launchwp-accent-foreground));
}
.hero-fx .launchwp-approval-card__site { font-size: 13.5px; font-weight: 600; color: hsl(var(--launchwp-muted-foreground)); }
.hero-fx .launchwp-approval-card__body { font-size: 14px; line-height: 1.6; margin: 0; }
.hero-fx .launchwp-approval-card__meta { font-family: var(--launchwp-font-mono); font-size: 12px; color: hsl(var(--launchwp-muted-foreground)); }
.hero-fx .launchwp-approval-card__btn {
  font-family: var(--launchwp-font-sans); font-size: 13.5px; font-weight: 600;
  padding: 8px 16px; border-radius: var(--launchwp-radius-md); cursor: pointer;
  border: 1px solid hsl(var(--launchwp-border)); background: transparent;
  color: hsl(var(--launchwp-foreground)); white-space: nowrap;
}
.hero-fx .launchwp-approval-card__btn--approve {
  background: hsl(var(--launchwp-success)); color: hsl(var(--launchwp-success-foreground)); border-color: transparent;
}
.hero-fx .launchwp-status-badge {
  font-family: var(--launchwp-font-mono); display: inline-flex; align-items: center; gap: 5px;
  font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em;
  padding: 3px 10px; border-radius: var(--launchwp-radius-full); border: 1px solid transparent;
}
.hero-fx .launchwp-status-badge::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.hero-fx .launchwp-status-badge--approved { background: hsl(var(--launchwp-success) / 0.14); color: hsl(var(--launchwp-success)); }
.hero-fx .launchwp-status-badge--pending { background: hsl(var(--launchwp-warning-bg)); color: hsl(var(--launchwp-warning-foreground)); }
`;

function ruleColor(published, dark) {
  const P = dark ? [221, 88, 64] : [221, 83, 53];
  const S = dark ? [142, 68, 52] : [142, 71, 45];
  const h = lerp(P[0], S[0], published), s = lerp(P[1], S[1], published), l = lerp(P[2], S[2], published);
  return `hsl(${h.toFixed(1)} ${s.toFixed(1)}% ${l.toFixed(1)}%)`;
}

const CURSOR_ENTRY = { x: 1170, y: 792 };

function Cursor({ x, y, opacity, press, ripple, dark }) {
  const fill = dark ? '#f4f6fb' : '#16181d';
  const stroke = dark ? '#0b0d12' : '#ffffff';
  const scale = 1 - press * 0.14;
  const rippleOpacity = ripple > 0 && ripple < 1 ? (1 - ripple) * 0.5 : 0;
  const rippleScale = 0.2 + ripple * 1.3;
  return (
    <div style={{ position: 'absolute', left: x, top: y, opacity, pointerEvents: 'none', zIndex: 40,
                  transform: `translate(-3px,-2px) scale(${scale})`, transformOrigin: '3px 2px',
                  transition: 'none' }}>
      <div style={{ position: 'absolute', left: 2, top: 1, width: 44, height: 44, marginLeft: -22, marginTop: -22,
                    borderRadius: '50%', border: `2px solid ${dark ? '#7aa2ff' : 'hsl(221 83% 53%)'}`,
                    opacity: rippleOpacity, transform: `scale(${rippleScale})` }} />
      <svg width="28" height="32" viewBox="0 0 28 32" style={{ display: 'block',
           filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.28))' }}>
        <path d="M4 3 L4 25 L10.2 19.4 L14.2 28 L18 26.2 L14 17.8 L22 17.6 Z"
              fill={fill} stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Frame(props) {
  const { dark, cardIn, emptyOpacity, published, checkDraw, ring, cam, agent, cursor } = props;
  const camRef = React.useRef(null);
  const approveRef = React.useRef(null);
  const [target, setTarget] = React.useState({ x: 452, y: 470 });

  const measure = React.useCallback(() => {
    const cel = camRef.current, bel = approveRef.current;
    if (!cel || !bel) return;
    const cr = cel.getBoundingClientRect(), br = bel.getBoundingClientRect();
    if (cr.width > 0 && br.width > 0) {
      setTarget({
        x: (br.left + br.width / 2 - cr.left) / cr.width * 1280,
        y: (br.top + br.height / 2 - cr.top) / cr.height * 720,
      });
    }
  }, []);
  React.useLayoutEffect(() => { measure(); }, [measure]);
  React.useEffect(() => {
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  }, [measure]);

  const cardOpacity = clamp(cardIn, 0, 1);
  const cardTY = (1 - cardIn) * -18;
  const cardScale = 0.965 + 0.035 * cardIn;
  const pendingCount = (cardIn > 0.5 && published < 0.5) ? '1' : '0';

  const approveHover = cursor ? clamp((cursor.progress - 0.6) / 0.28, 0, 1) * cursor.opacity : 0;
  const ringOpacity = Math.sin(clamp(ring, 0, 1) * Math.PI) * 0.6;
  const ringScale = 1 + clamp(ring, 0, 1) * 0.055;

  const cur = cursor
    ? { x: lerp(CURSOR_ENTRY.x, target.x, cursor.progress), y: lerp(CURSOR_ENTRY.y, target.y, cursor.progress) }
    : null;

  const panelShadow = dark
    ? '0 24px 60px -18px rgba(0,0,0,0.7), 0 0 0 1px hsl(234 20% 18% / 0.9)'
    : '0 24px 55px -22px rgba(23,40,89,0.32), 0 2px 8px rgba(23,40,89,0.06)';
  const backdrop = dark
    ? 'radial-gradient(46% 52% at 50% 44%, hsl(221 88% 60% / 0.12), transparent 72%), radial-gradient(130% 100% at 50% 6%, hsl(230 32% 10%), hsl(240 22% 4%) 62%, hsl(240 24% 3%))'
    : 'radial-gradient(44% 50% at 50% 46%, hsl(221 90% 56% / 0.09), transparent 70%), radial-gradient(130% 100% at 50% 8%, hsl(221 100% 98%), hsl(228 26% 96%) 55%, hsl(228 22% 93%))';

  return (
    <div className={'hero-fx' + (dark ? ' hero-dark' : '')}
         style={{ position: 'absolute', inset: 0, overflow: 'hidden',
                  fontFamily: 'var(--launchwp-font-sans)', background: backdrop }}>
      <style>{CSS_TEXT}</style>

      <div style={{ position: 'absolute', inset: 0, opacity: dark ? 0.35 : 0.5, pointerEvents: 'none',
                    backgroundImage: `radial-gradient(hsl(var(--launchwp-muted-foreground) / 0.10) 1px, transparent 1px)`,
                    backgroundSize: '26px 26px', maskImage: 'radial-gradient(70% 65% at 50% 46%, #000, transparent 78%)',
                    WebkitMaskImage: 'radial-gradient(70% 65% at 50% 46%, #000, transparent 78%)' }} />

      <div ref={camRef} style={{ position: 'absolute', inset: 0, transform: `scale(${cam})`, transformOrigin: '50% 53%',
                    display: 'grid', placeItems: 'center' }}>
        <div style={{ position: 'relative', width: 600 }}>
          <div style={{ position: 'absolute', inset: '-7px', borderRadius: 16, pointerEvents: 'none',
                        border: '2px solid hsl(var(--launchwp-success))', opacity: ringOpacity,
                        transform: `scale(${ringScale})`, boxShadow: '0 0 24px hsl(var(--launchwp-success) / 0.35)' }} />

          <div style={{ background: 'hsl(var(--launchwp-card))', border: '1px solid hsl(var(--launchwp-border))',
                        borderRadius: 14, padding: 20, boxShadow: panelShadow }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                     style={{ color: 'hsl(var(--launchwp-muted-foreground))' }}>
                  <path d="M3 13h4l2 3h6l2-3h4M5 6l-2 7v5a1 1 0 001 1h16a1 1 0 001-1v-5l-2-7a2 2 0 00-2-1.5H7A2 2 0 005 6z"
                        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: 'hsl(var(--launchwp-foreground))' }}>Approval queue</span>
              </div>
              <span style={{ fontFamily: 'var(--launchwp-font-mono)', fontSize: 11.5, fontWeight: 600,
                             padding: '4px 10px', borderRadius: 999,
                             background: pendingCount === '1' ? 'hsl(var(--launchwp-accent))' : 'hsl(var(--launchwp-muted))',
                             color: pendingCount === '1' ? 'hsl(var(--launchwp-accent-foreground))' : 'hsl(var(--launchwp-muted-foreground))' }}>
                {pendingCount} pending
              </span>
            </div>

            <div style={{ position: 'relative' }}>
              <article className="launchwp launchwp-approval-card"
                       style={{ opacity: cardOpacity, transform: `translateY(${cardTY}px) scale(${cardScale})`,
                                transformOrigin: '50% 30%', borderLeftColor: ruleColor(published, dark) }}>
                <div className="launchwp-approval-card__head">
                  <span className="launchwp-approval-card__kind">WP-CLI</span>
                  <span className="launchwp-approval-card__site">fittric.com</span>
                  <span style={{ marginLeft: 'auto', position: 'relative', display: 'inline-flex', minWidth: 92, justifyContent: 'flex-end' }}>
                    <span className="launchwp-status-badge launchwp-status-badge--pending"
                          style={{ opacity: clamp(1 - published * 2.2, 0, 1) }}>Pending</span>
                    <span className="launchwp-status-badge launchwp-status-badge--approved"
                          style={{ position: 'absolute', right: 0, top: 0, opacity: clamp((published - 0.55) * 3, 0, 1) }}>Approved</span>
                  </span>
                </div>
                <p className="launchwp-approval-card__body">Update WooCommerce from 8.9.1 to 9.0.0 and clear the object cache.</p>
                <span className="launchwp-approval-card__meta">Proposed just now &nbsp;-&nbsp; MCP Adapter</span>

                <div style={{ position: 'relative', borderTop: '1px solid hsl(var(--launchwp-border))', paddingTop: 12, minHeight: 34 }}>
                  <div style={{ display: 'flex', gap: 8, opacity: clamp(1 - published * 1.8, 0, 1),
                                transform: `translateY(${published * -5}px)` }}>
                    <button ref={approveRef} type="button" className="launchwp-approval-card__btn launchwp-approval-card__btn--approve"
                            style={{ transform: `scale(${1 - (cursor ? cursor.press : 0) * 0.05})`,
                                     boxShadow: approveHover > 0
                                       ? `0 0 0 ${(2 + approveHover * 2).toFixed(1)}px hsl(var(--launchwp-success) / ${(0.28 * approveHover).toFixed(2)})`
                                       : 'none',
                                     filter: approveHover > 0 ? `brightness(${1 + approveHover * 0.06})` : 'none' }}>
                      Approve
                    </button>
                    <button type="button" className="launchwp-approval-card__btn">Reject</button>
                  </div>
                  <div style={{ position: 'absolute', inset: 0, top: 12, display: 'flex', alignItems: 'center', gap: 9,
                                opacity: clamp((published - 0.5) * 2.4, 0, 1),
                                transform: `translateY(${(1 - published) * 6}px)` }}>
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="11" fill="hsl(var(--launchwp-success))" />
                      <path d="M6.7 12.4 L10.3 16 L17.2 8.6" stroke="hsl(var(--launchwp-success-foreground))"
                            strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"
                            strokeDasharray="17" strokeDashoffset={(1 - clamp(checkDraw, 0, 1)) * 17} />
                    </svg>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: 'hsl(var(--launchwp-foreground))' }}>Published to production</span>
                    <span style={{ fontFamily: 'var(--launchwp-font-mono)', fontSize: 12, color: 'hsl(var(--launchwp-muted-foreground))' }}>&nbsp;&middot;&nbsp; just now</span>
                  </div>
                </div>
              </article>

              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center', gap: 8, opacity: emptyOpacity,
                            pointerEvents: 'none' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ color: 'hsl(var(--launchwp-muted-foreground))', opacity: 0.55 }}>
                  <path d="M4 13h4l2 3h4l2-3h4M6 6l-2 7v4a1 1 0 001 1h14a1 1 0 001-1v-4l-2-7a2 2 0 00-2-1.5H8A2 2 0 006 6z"
                        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 13.5, fontWeight: 500, color: 'hsl(var(--launchwp-muted-foreground))' }}>No changes waiting</span>
              </div>
            </div>
          </div>

          <div style={{ position: 'absolute', left: '50%', top: -18, transform: `translate(-50%, ${(1 - agent) * -10}px)`,
                        opacity: agent, pointerEvents: 'none', display: 'flex', alignItems: 'center', gap: 8,
                        padding: '7px 13px', borderRadius: 999, background: 'hsl(var(--launchwp-card))',
                        border: '1px solid hsl(var(--launchwp-border))',
                        boxShadow: dark ? '0 8px 22px -8px rgba(0,0,0,0.6)' : '0 8px 22px -10px rgba(23,40,89,0.28)' }}>
            <span style={{ position: 'relative', width: 8, height: 8 }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'hsl(var(--launchwp-primary))' }} />
              <span style={{ position: 'absolute', inset: -3, borderRadius: '50%', border: '2px solid hsl(var(--launchwp-primary))',
                             opacity: 0.4 * agent, transform: `scale(${1 + agent * 0.6})` }} />
            </span>
            <span style={{ fontFamily: 'var(--launchwp-font-mono)', fontSize: 11.5, fontWeight: 600, color: 'hsl(var(--launchwp-foreground))' }}>MCP Adapter</span>
            <span style={{ fontSize: 12.5, color: 'hsl(var(--launchwp-muted-foreground))' }}>proposing a change</span>
          </div>

        </div>

        {cur && <Cursor x={cur.x} y={cur.y} opacity={cursor.opacity} press={cursor.press} ripple={cursor.ripple} dark={dark} />}
      </div>
    </div>
  );
}

function Propose({ progress: p }) {
  const dark = useHeroDark();
  const emptyOpacity = interpolate([0.16, 0.30], [1, 0], Easing.easeInQuad)(p);
  const cardIn = interpolate([0.34, 0.74], [0, 1], Easing.easeOutBack)(p);
  const agent = interpolate([0.04, 0.18, 0.80, 0.95], [0, 1, 1, 0], Easing.easeInOutSine)(p);
  return <Frame dark={dark} cardIn={cardIn} emptyOpacity={emptyOpacity} published={0}
                checkDraw={0} ring={0} cam={1} agent={agent} cursor={null} />;
}

function Review({ progress: p }) {
  const dark = useHeroDark();
  const cam = interpolate([0.18, 1], [1, 1.03], Easing.easeInOutSine)(p);
  const cprog = interpolate([0.06, 0.74], [0, 1], Easing.easeInOutCubic)(p);
  const copacity = interpolate([0.03, 0.15], [0, 1], Easing.easeOutQuad)(p);
  return <Frame dark={dark} cardIn={1} emptyOpacity={0} published={0} checkDraw={0} ring={0}
                cam={cam} agent={0} cursor={{ progress: cprog, opacity: copacity, press: 0, ripple: 0 }} />;
}

function Approve({ progress: p }) {
  const dark = useHeroDark();
  const cam = interpolate([0, 0.1, 0.5, 1], [1.03, 1.05, 1.03, 1.0],
    [Easing.easeOutQuad, Easing.easeInOutSine, Easing.easeInOutSine])(p);
  const published = interpolate([0.14, 0.5], [0, 1], Easing.easeInOutCubic)(p);
  const checkDraw = interpolate([0.26, 0.58], [0, 1], Easing.easeOutCubic)(p);
  const ring = interpolate([0.16, 0.66], [0, 1], Easing.easeOutQuad)(p);
  const press = interpolate([0.0, 0.06, 0.14], [0, 1, 0], Easing.easeOutQuad)(p);
  const ripple = interpolate([0.05, 0.34], [0, 1], Easing.easeOutQuad)(p);
  const copacity = interpolate([0.26, 0.42], [1, 0], Easing.easeInQuad)(p);
  return <Frame dark={dark} cardIn={1} emptyOpacity={0} published={published} checkDraw={checkDraw}
                ring={ring} cam={cam} agent={0}
                cursor={{ progress: 1, opacity: copacity, press: press, ripple: ripple }} />;
}

function Clear({ progress: p }) {
  const dark = useHeroDark();
  const cardIn = interpolate([0.34, 0.82], [1, 0], Easing.easeInCubic)(p);
  const emptyOpacity = interpolate([0.5, 0.86], [0, 1], Easing.easeOutQuad)(p);
  return <Frame dark={dark} cardIn={cardIn} emptyOpacity={emptyOpacity} published={1}
                checkDraw={1} ring={0} cam={1} agent={0} cursor={null} />;
}

// Scenes: [{name:'Propose',dur:2.2},{name:'Review',dur:1.7},{name:'Approve',dur:2.5},{name:'Clear',dur:1.3}], playback loop.
