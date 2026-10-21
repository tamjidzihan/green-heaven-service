import { Link } from "react-router-dom";
import { ParallaxBackground } from "../components/common/ParallaxBackground";
import { Seo } from "../components/common/Seo";

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found | Green Heaven Service"
        description="The requested page could not be found on the Green Heaven Service website."
      />
      <section className="not-found">
        <ParallaxBackground src="/assets/facility-hero.jpg" />
        <div className="site-container not-found__content">
          <p className="eyebrow">404 · Page not found</p>
          <h1>This page isn’t here.</h1>
          <p>The address may be incorrect, or the page may have moved.</p>
          <Link className="button button--frost" to="/">Return to home</Link>
        </div>
      </section>
    </>
  );
}
