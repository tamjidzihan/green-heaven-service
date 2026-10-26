import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactCta } from "../components/common/ContactCta";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { ParallaxBackground } from "../components/common/ParallaxBackground";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { ManagingDirectorSection } from "../components/sections/ManagingDirectorSection";
import { ServiceFeature } from "../components/sections/ServiceFeature";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ServiceGrid } from "../components/services/ServiceGrid";
import { company } from "../data/company";
import { services } from "../data/services";

const homepageFeatures = services
  .filter((service) => service.homepageFeature)
  .sort(
    (first, second) =>
      (first.homepageFeature?.order ?? 0) -
      (second.homepageFeature?.order ?? 0),
  );

const HERO_SLIDES = [
  {
    src: "/assets/security-hero.jpg",
    title: "Security Services",
  },
  {
    src: "/assets/cleaning-hero.jpg",
    title: "Cleaning & Housekeeping",
  },
  {
    src: "/assets/facility-hero.jpg",
    title: "Facility Management",
  },
  {
    src: "/assets/landscaping-hero.jpg",
    title: "Landscaping & Gardening",
  },
  {
    src: "/assets/dairy-hero.jpg",
    title: "Agricultural & Dairy Farm",
  },
];

export function HomePage() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const heroImageSources = HERO_SLIDES.map((slide) => slide.src);

  return (
    <>
      <Seo
        title="Green Heaven Service | Protection You Trust"
        description="Discover security, cleaning and housekeeping, pest control, and other services from Green Heaven Service in Bangladesh."
      />
      <section className="home-hero">
        <ParallaxBackground
          className="home-hero__background"
          images={heroImageSources}
          interval={4000}
          activeIndex={activeHeroIndex}
          onIndexChange={setActiveHeroIndex}
        />
        <div aria-hidden="true" className="home-hero__haze" />
        <div aria-hidden="true" className="home-hero__floor" />
        <div aria-hidden="true" className="home-hero__crown" />
        <div className="site-container home-hero__content">
          <div className="home-hero__copy">
            <p className="hero-eyebrow"><span /> Serving Bangladesh since {company.established}</p>
            <h1>Protection You Trust. <span>Service You Can Rely On.</span></h1>
            <p className="home-hero__description">
              Security, cleaning and housekeeping, pest control, and supporting services for your workplace and property.
            </p>
            <div className="home-hero__actions">
              <Link className="button button--frost" to="/contact">
                Request a quote <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
              <Link className="button button--glass" to="/services">
                Explore services <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
          <div className="home-hero__bottom">
            <div
              className="hero-indicators"
              role="tablist"
              aria-label="Background image slides"
            >
              {HERO_SLIDES.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={index === activeHeroIndex}
                  aria-label={`Slide ${index + 1}: ${slide.title}`}
                  title={slide.title}
                  className={`hero-indicator-dot${index === activeHeroIndex ? " hero-indicator-dot--active" : ""
                    }`}
                  onClick={() => setActiveHeroIndex(index)}
                />
              ))}
            </div>
            <a className="hero-scroll" href="#services">
              <span>Scroll to explore</span><ArrowDown aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
      </section>

      {homepageFeatures.map((service) => (
        <ServiceFeature key={service.slug} service={service} />
      ))}

      <ManagingDirectorSection />

      <section className="section section--bone" id="services">
        <div className="site-container">
          <ScrollReveal className="section-heading-row">
            <SectionHeading
              description="From security and facility care to other listed business activities, explore the services offered by Green Heaven Service."
              eyebrow="What we do"
              title="Support for the places that matter."
            />
            <Link className="text-link" to="/services">
              All services <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </ScrollReveal>
          <ServiceGrid horizontal services={services} />
        </div>
      </section>

      <section className="section company-band">
        <ScrollReveal className="site-container company-band__grid" stagger>
          <div className="company-band__identity gh-reveal-item">
            <p className="eyebrow">Green Heaven Service</p>
            <h2>Quality service at minimum cost.</h2>
            <p>
              Established in {company.established}, Green Heaven Service brings together security, cleaning and housekeeping, pest control, and other listed business activities.
            </p>
            <Link className="text-link text-link--light" to="/about">
              About the company <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="company-band__detail gh-reveal-item">
            <div className="company-band__icon"><ShieldCheck aria-hidden="true" size={25} /></div>
            <p className="eyebrow">A considered approach</p>
            <h3>People, planning, and checks.</h3>
            <p>
              Supported practices include staff screening and training, work schedules, site evaluations, project coordination, and quality checks where relevant.
            </p>
            <Link to="/quality-safety">
              Explore quality & safety <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="section section--bone quality-preview">
        <ScrollReveal className="site-container quality-preview__inner">
          <div>
            <p className="eyebrow">Quality & safety</p>
            <h2>Good service begins with a clear understanding of the site.</h2>
          </div>
          <div className="quality-preview__copy">
            <p>
              Site evaluations, risk assessment, staff training, schedules, and quality checks are among the practices described by the company.
            </p>
            <Link className="text-link" to="/quality-safety">
              How we work <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
      <TestimonialsSection />
      <ContactCta />
    </>
  );
}
