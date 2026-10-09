import { profile } from "@/content/profile";
import { getSiteUrl } from "@/lib/site";

type JsonLdData = Record<string, unknown>;

function absolute(path: string): string {
  const base = getSiteUrl();
  return new URL(path, base).toString();
}

function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function PersonJsonLd() {
  const sameAs = profile.socialProfiles
    .map((s) => s.url)
    .filter((url): url is NonNullable<typeof url> => url !== undefined);

  const jobTitles = ["Software Engineer", "Founder", "Full-stack Developer"];

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absolute("/about")}#person`,
    name: profile.name,
    alternateName: profile.alternateName,
    url: absolute("/about"),
    image: absolute("/images/shreda.webp"),
    description: profile.shortBio,
    jobTitle: jobTitles,
    worksFor: {
      "@type": "Organization",
      name: "Schooldra",
      url: profile.schooldraUrl,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Nnamdi Azikiwe University",
    },
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs,
  };

  return <JsonLd data={data} />;
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

  return <JsonLd data={data} />;
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

  return <JsonLd data={data} />;
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
      "@id": `${absolute("/about")}#person`,
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

  return <JsonLd data={data} />;
}
