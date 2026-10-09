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
        <h1 className="page-title">Founder first. Developer every day.</h1>
      </div>
      <section className="about-layout fade-in" aria-label="Founder story">
        <div className="about-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Portrait className="about-portrait" />
      </section>
    </div>
  );
}
