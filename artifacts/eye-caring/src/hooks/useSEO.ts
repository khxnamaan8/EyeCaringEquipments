import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://eyecaringequipments.com/og-image.jpg",
  keywords,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Eye Caring Equipments`;
    document.title = fullTitle;

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    setMeta("og:title", ogTitle ?? fullTitle, "property");
    setMeta("og:description", ogDescription ?? description, "property");
    setMeta("og:image", ogImage, "property");

    setMeta("twitter:title", ogTitle ?? fullTitle);
    setMeta("twitter:description", ogDescription ?? description);

    if (canonical) setCanonical(canonical);
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, keywords]);
}
