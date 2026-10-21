import type { ReactNode } from "react";
import { ParallaxBackground } from "./ParallaxBackground";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  image?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
  image = "/assets/facility-hero.jpg",
}: PageIntroProps) {
  return (
    <section className="page-intro">
      <ParallaxBackground src={image} />
      <div className="site-container page-intro__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro__description">{description}</p>
        {children}
      </div>
    </section>
  );
}
