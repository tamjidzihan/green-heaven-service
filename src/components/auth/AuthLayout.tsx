import { useState, useCallback, useRef, type MouseEvent } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ArrowLeft, ShieldCheck, CheckCircle2, Building2, Sparkles } from "lucide-react";
import { company } from "../../data/company";
import { AuthDotWave } from "./AuthDotWave";

export function AuthLayout() {
  const location = useLocation();
  const [mousePos, setMousePos] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const asideRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    if (!asideRef.current) return;
    const rect = asideRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setMousePos({ x, y, active: true });
    });
  }, []);

  const handleMouseEnter = useCallback((e: MouseEvent<HTMLElement>) => {
    if (!asideRef.current) return;
    const rect = asideRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setMousePos((prev) => ({ ...prev, active: false }));
  }, []);

  return (
    <div className="auth-shell">
      {/* Full-Page Background Hero Image with slight dark filter (no blur) */}
      <div aria-hidden="true" className="auth-full-bg">
        <img
          alt=""
          className="auth-full-bg__image"
          src="/assets/security-hero.jpg"
        />
        <div className="auth-full-bg__dark-filter" />
        <div className="auth-full-bg__gradient" />
      </div>

      {/* Top minimal header (transparent with blur like main navbar) */}
      <header className="auth-header">
        <div className="auth-header__inner">
          <Link
            aria-label="Green Heaven Service homepage"
            className="brand auth-header__brand"
            to="/"
          >
            <span aria-hidden="true" className="brand__mark">
              <img alt="" src="/assets/greenheavenservice_logo.svg" />
            </span>
            <span className="brand__name">
              Green Heaven <span>Service</span>
            </span>
          </Link>

          <Link className="auth-header__back" to="/">
            <ArrowLeft aria-hidden="true" size={16} />
            <span>Return to website</span>
          </Link>
        </div>
      </header>

      {/* Main Two-Column Container */}
      <main className="auth-body">
        {/* Left Column: Form Canvas */}
        <section aria-label="Authentication Form" className="auth-form-column">
          <div className="auth-form-column__inner">
            {/* Mobile-only brand badge */}
            <div className="auth-mobile-brand">
              <Link aria-label="Green Heaven Service homepage" to="/">
                <img
                  alt="Green Heaven Service"
                  className="auth-mobile-brand__logo"
                  src="/assets/greenheavenservice_logo.svg"
                />
              </Link>
              <div className="auth-mobile-brand__text">
                <span className="auth-mobile-brand__title">Green Heaven Service</span>
                <span className="auth-mobile-brand__subtitle">{company.slogan}</span>
              </div>
            </div>

            {/* Routed Form with subtle entrance transition */}
            <div className="auth-form-wrapper" key={location.pathname}>
              <Outlet />
            </div>

            {/* Form column bottom footer */}
            <footer className="auth-form-footer">
              <p>
                © {new Date().getFullYear()} {company.name}. All rights reserved.
              </p>
              <div className="auth-form-footer__links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <span>•</span>
                <Link to="/contact">Support</Link>
              </div>
            </footer>
          </div>
        </section>

        {/* Right Column: Brand Presentation Panel (Desktop) */}
        <aside
          aria-label="Brand Presentation"
          className="auth-brand-column"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          ref={asideRef}
        >
          {/* Dynamic Interactive Cursor Spotlight Light Effect */}
          <div
            aria-hidden="true"
            className="auth-brand-spotlight"
            style={{
              opacity: mousePos.active ? 1 : 0,
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            }}
          />

          {/* Ambient Radial Glowing Lighting */}
          <div aria-hidden="true" className="auth-brand-glow-frost" />
          <div aria-hidden="true" className="auth-brand-glow-forest" />

          {/* Dynamic Interactive Dot Wave Canvas (undulating wave dots with cursor illumination) */}
          <AuthDotWave
            mouseActive={mousePos.active}
            mouseX={mousePos.x}
            mouseY={mousePos.y}
          />

          <div className="auth-brand-content">
            {/* Tagline / Eyebrow */}
            <div className="auth-brand-eyebrow">
              <span className="auth-brand-eyebrow__dot" />
              <span>Established {company.established}</span>
            </div>

            {/* Heading */}
            <h1 className="auth-brand-heading">
              Security. Service. Trust.
            </h1>

            {/* Factual Statement */}
            <p className="auth-brand-statement">
              Green Heaven Service delivers professional physical security, corporate facility care, cleaning, and pest control across commercial and residential premises in Bangladesh.
            </p>

            {/* Understated Decorative Card */}
            <div className="auth-glass-card">
              <div className="auth-glass-card__header">
                <div className="auth-glass-card__icon">
                  <ShieldCheck aria-hidden="true" size={22} />
                </div>
                <div>
                  <h2 className="auth-glass-card__title">Operational Vigilance</h2>
                  <p className="auth-glass-card__subtitle">{company.slogan}</p>
                </div>
              </div>

              <div className="auth-glass-card__divider" />

              <ul className="auth-glass-card__list">
                <li>
                  <CheckCircle2 aria-hidden="true" size={15} />
                  <span>Disciplined security personnel and round-the-clock supervision</span>
                </li>
                <li>
                  <Sparkles aria-hidden="true" size={15} />
                  <span>Systematic facility hygiene, housekeeping, and eco-friendly pest control</span>
                </li>
                <li>
                  <Building2 aria-hidden="true" size={15} />
                  <span>Licensed corporate service provider (Trade License: {company.tradeLicense})</span>
                </li>
              </ul>
            </div>

            {/* Slogan footnote */}
            <div className="auth-brand-slogan-bar">
              <span className="auth-brand-slogan-bar__quote">“{company.slogan}”</span>
              <span className="auth-brand-slogan-bar__label">— {company.name} Philosophy</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
