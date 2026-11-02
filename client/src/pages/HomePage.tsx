import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactCta } from "../components/common/ContactCta";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { ParallaxBackground } from "../components/common/ParallaxBackground";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { ManagingDirectorSection } from "../components/sections/ManagingDirectorSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { company } from "../data/company";
import { services } from "../data/services";
import { ServiceCard } from "@/components/services/ServiceCard";



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
  const coreServices = services.filter((service) => service.category === "primary");
  const otherActivities = services.filter(
    (service) => service.category === "additional",
  );

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
            <h1>
              <span className="hero-title-line">Protection You Trust.</span>
              <span className="hero-title-line hero-title-line--accent">
                Service You Can Rely On.
              </span>
            </h1>
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
      <section className="section section--bone" id="services">
        <div className="site-container ">
          <ScrollReveal className="section-heading-row">
            <SectionHeading
              description="Explore security, cleaning, pest control, and Rafi Real Estate. The remaining business concerns are listed with clear notes where their scope needs confirmation."
              eyebrow="Service catalogue"
              title="All services & business divisions."
            />
            <Link className="text-link" to="/services">
              All services <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </ScrollReveal>

          <p className="about-portfolio__label">Core services</p>
          <div className="service-grid about-portfolio__core">
            {coreServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                staggerIndex={index}
              />
            ))}
          </div>

          <p className="about-portfolio__label about-portfolio__label--additional">
            Other listed business concerns
          </p>
          <div className="service-grid about-portfolio__other">
            {otherActivities.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                staggerIndex={index}
              />
            ))}
          </div>
        </div>
      </section>
      <ManagingDirectorSection />
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
