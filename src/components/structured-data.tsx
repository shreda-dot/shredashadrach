"use client";

import Script from "next/script";
import { profile } from "@/content/profile";
import { getSiteUrl } from "@/lib/site";

function absolute(path: string): string {
  const base = getSiteUrl();
  return new URL(path, base).toString();
}

type PersonJsonLdProps = {
  variant?: "sitewide" | "about";
};

export function PersonJsonLd({ variant = "sitewide" }: PersonJsonLdProps) {
  const sameAs = profile.socialProfiles
    .map((s) => s.url)
    .filter((url): url is string => Boolean(url));

  const jobTitles = ["Software Engineer", "Founder", "Full-stack Developer"];

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.alternateName,
    url: absolute("/about"),
    image: absolute("/images/shreda.webp"),
    jobTitle: variant === "about" ? jobTitles : undefined,
    worksFor:
      variant === "about"
        ? {
            "@type": "Organization",
            name: "Schooldra",
            url: profile.schooldraUrl,
          }
        : undefined,
    alumniOf:
      variant === "about"
        ? {
            "@type": "CollegeOrUniversity",
            name: "Nnamdi Azikiwe University",
          }
        : undefined,
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Progressive Web Apps",
      "Product engineering",
    ],
    email: `mailto:${profile.contactEmail}`,
    address:
      variant === "about"
        ? {
            "@type": "PostalAddress",
            addressLocality: "Lagos",
            addressCountry: "NG",
          }
        : undefined,
    sameAs,
  };

  return (
    <Script
      id="ld-json-person"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shreda",
    url: absolute("/"),
    inLanguage: "en-NG",
    description: profile.shortBio,
    potentialAction: {
      "@type": "SearchAction",
      target: `${absolute("/projects")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="ld-json-website"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type BreadcrumbJsonLdProps = {
  items: readonly { name: string; href: string }[];
};

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.href),
    })),
  };

  return (
    <Script
      id={`ld-json-breadcrumb-${items.join(",").length}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  dateModified?: string;
  articleSection: string;
  url: string;
  image?: string;
};

export function ArticleJsonLd({
  headline,
  description,
  articleSection,
  url,
  image,
}: ArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    articleSection,
    url: absolute(url),
    image: image ? absolute(image) : absolute("/opengraph-image"),
    inLanguage: "en-NG",
    author: {
      "@type": "Person",
      name: profile.name,
      url: absolute("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: profile.name,
      url: absolute("/"),
      logo: {
        "@type": "ImageObject",
        url: absolute("/icon.svg"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absolute(url),
    },
  };

  return (
    <Script
      id="ld-json-article"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
