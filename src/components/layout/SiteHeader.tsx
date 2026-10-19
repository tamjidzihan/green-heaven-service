import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { services } from "../../data/services";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/quality-safety", label: "Quality & Safety" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const servicesMenuRef = useRef<HTMLDetailsElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
    servicesMenuRef.current?.removeAttribute("open");
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      } else if (servicesMenuRef.current?.open) {
        servicesMenuRef.current.open = false;
        servicesMenuRef.current.querySelector("summary")?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={`site-header${isHome ? " site-header--hero" : ""}`}>
      <div className="site-container site-header__inner">
        <Link
          aria-label="Green Heaven Service home"
          className="brand"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand__mark">
            <img alt="" src="/assets/greenheavenservice_logo.svg" />
          </span>
          <span className="brand__name">Green Heaven <span>Service</span></span>
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          <details className="services-menu" ref={servicesMenuRef}>
            <summary
              className={`nav-link${location.pathname.startsWith("/services") ? " nav-link--active" : ""}`}
            >
              Services <span aria-hidden="true" className="services-menu__chevron" />
            </summary>
            <div className="services-menu__panel">
              <NavLink className="services-menu__all" to="/services">
                Browse all services <ArrowUpRight aria-hidden="true" size={16} />
              </NavLink>
              <div className="services-menu__links">
                {services.map((service) => (
                  <NavLink key={service.slug} to={`/services/${service.slug}`}>
                    {service.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </details>
          {links.filter((link) => link.to !== "/services").map((link) => (
            <NavLink
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link--active" : ""}`
              }
              key={link.to}
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link className="header-quote" to="/contact">
          Request a quote <ArrowUpRight aria-hidden="true" size={16} />
        </Link>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" size={23} /> : <Menu aria-hidden="true" size={23} />}
        </button>
      </div>

      <nav
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        id="mobile-navigation"
      >
        <div className="mobile-nav__links">
          {links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `mobile-nav__link${isActive ? " mobile-nav__link--active" : ""}`
              }
              key={link.to}
              onClick={() => {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
              to={link.to}
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" size={17} />
            </NavLink>
          ))}
          <Link
            className="mobile-nav__cta"
            onClick={() => {
              setMenuOpen(false);
              menuButtonRef.current?.focus();
            }}
            to="/contact"
          >
            Request a quote <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
