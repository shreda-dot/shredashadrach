import type { Metadata } from "next";
import { Portrait } from "@/components/portrait";
import { profile } from "@/content/profile";
import {
  BreadcrumbJsonLd,
  PersonJsonLd,
} from "@/components/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  title: "About",
  description:
    "A short introduction to Shreda, a solo founder and full-stack developer, and how a Biochemistry degree led to software.",
  openGraph: {
    title: "About Shreda",
    description: "The story behind Schooldra and the developer building it.",
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Shreda",
    description: "The story behind Schooldra and the developer building it.",
  },
};

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <div className="page-intro-wrap">
        <p className="eyebrow">About</p>
        <h1 className="page-title">Founder first. Builder every day.</h1>
        <p className="page-intro">
          A short introduction: who I am, how I got into software, and what
          I&apos;m building now.
        </p>
      </div>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <PersonJsonLd />
      <section className="about-layout fade-in" aria-label="My story">
        <div className="about-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="about-aside">
          <Portrait className="about-portrait" />
          <aside className="story-card">
            <p className="eyebrow">Based in</p>
            <strong>{profile.location}</strong>
            <p>
              {profile.education.field} graduate · {profile.education.school}
            </p>
            <p>{profile.education.honours}</p>
          </aside>
        </div>
      </section>
    </div>
  );
}