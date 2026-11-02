import { useEffect } from "react";

const SITE_URL = "https://greenheavenserviceltd.com";

type SeoProps = {
  title: string;
  description: string;
};

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    let descriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.append(descriptionTag);
    }
    descriptionTag.content = description;

    const setPropertyMeta = (property: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(
        `meta[property="${property}"]`,
      );
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.append(tag);
      }
      tag.content = content;
    };

    const canonicalPath =
      window.location.pathname === "/"
        ? "/"
        : window.location.pathname.replace(/\/+$/, "");
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    let canonicalTag = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.append(canonicalTag);
    }
    canonicalTag.href = canonicalUrl;

    setPropertyMeta("og:title", title);
    setPropertyMeta("og:description", description);
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:url", canonicalUrl);

    let twitterCard = document.querySelector<HTMLMetaElement>(
      'meta[name="twitter:card"]',
    );
    if (!twitterCard) {
      twitterCard = document.createElement("meta");
      twitterCard.name = "twitter:card";
      document.head.append(twitterCard);
    }
    twitterCard.content = "summary";
  }, [description, title]);

  return null;
}
