import { NextSeo } from "next-seo";
import Hero from "@/components/Hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import CertificateShowcase from "@/components/certificates/certificate-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { certificates } from "@/data/certs-feat";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Portfolio | Gauresh"
        description="Explore the professional portfolio of Gauresh G Pai, a skilled Engineering Student with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        openGraph={{
          title: "Portfolio | Gauresh",
          description:
            "Dive into the world of web development with Gauresh G Pai. Discover a Engineering Student with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
          url: "https://gauresh.is-a.dev",
          siteName: "Gauresh | Portfolio",
          type: "website",
          images: [
            {
              url: "https://gauresh.is-a.dev/logo.png",
              width: 1200,
              height: 630,
              alt: "Gauresh G Pai Portfolio",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@hseruag",
          site: "@hseruag",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Nextjs Developer, Engineering Student, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
          {
            name: "author",
            content: "Gauresh G Pai",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          }
        ]}
      />
      <Hero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
      <CertificateShowcase certificates={certificates} />
    </>
  );
}

