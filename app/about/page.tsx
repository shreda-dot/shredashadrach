import type { Metadata } from "next";
import { Portrait } from "@/components/portrait";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "A short introduction to Shreda, a solo founder and full-stack developer based in Lagos, Nigeria.",
  openGraph: {
    title: "About Shreda",
    description:
      "A solo founder and full-stack developer building products in Lagos, Nigeria.",
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Shreda",
    description:
      "A solo founder and full-stack developer building products in Lagos, Nigeria.",
  },
};

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <div className="page-intro-wrap">
        <p className="eyebrow">About</p>
        <h1 className="page-title">Founder first. Builder every day.</h1>
        <p className="page-intro">
          I’m Shreda, also known as Shadrach, a solo founder and full-stack
          developer based in Lagos, Nigeria.
        </p>
      </div>
      <section className="about-layout fade-in" aria-label="Founder story">
        <div className="about-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="about-aside">
          <Portrait className="about-portrait" />
          <aside className="story-card">
            <p className="eyebrow">Based in</p>
            <strong>Lagos, Nigeria</strong>
            <p>Biochemistry graduate · Nnamdi Azikiwe University</p>
            <p>Second Class Honours</p>
          </aside>
        </div>
      </section>
    </div>
  );
}
