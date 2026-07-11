import { createFileRoute } from "@tanstack/react-router";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { ContactCTA } from "@/components/site/ContactCTA";
import Hero from "#/components/site/Hero";
import AboutPreview from "#/components/site/AboutPreview";
import SkillSection from "#/components/site/SkillSection";
import Terminal from "#/components/site/Terminal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farukh Tugonov — Full Stack Software Engineer" },
      { name: "description", content: "Full stack engineer shipping polished, performant products with React, Java and Postgres." },
      { property: "og:title", content: "Farrukh Tugonov — Full Stack Software Engineer" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillSection />
      <ExperienceSection />
      <FeaturedProjects />
      {/* <Terminal /> */}
      <ContactCTA />
    </>
  );
}
