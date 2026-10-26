import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BackToTop } from "../common/BackToTop";
import { InitialVisitIntro } from "../common/InitialVisitIntro";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <InitialVisitIntro />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <div className="route-transition" key={location.pathname}>
          <Outlet />
        </div>
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
