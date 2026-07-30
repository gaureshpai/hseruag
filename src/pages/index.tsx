import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Gauresh G Pai — Software Engineer | React, Next.js & TypeScript
        </title>
        <meta
          name="description"
          content="Software Engineer with 9+ client projects delivered. Specializing in React, Next.js, TypeScript, and full-stack web development. Open to software engineering, full-stack, and automation work."
        />
        <meta
          name="keywords"
          content="Gauresh G Pai, Software Engineer, React Developer, Next.js Developer, TypeScript, Frontend Developer, Full Stack Developer, Web Developer, Portfolio, India, Mangaluru, Open Source, npm packages, CLI tools, hackathon winner"
        />
        <link rel="canonical" href="https://gauresh.is-a.dev/" />
        <meta
          property="og:title"
          content="Gauresh G Pai — Software Engineer | React, Next.js & TypeScript"
        />
        <meta
          property="og:description"
          content="Software Engineer with 9+ client projects delivered. Specializing in React, Next.js, TypeScript, and full-stack web development. Open to software engineering, full-stack, and automation work."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://gauresh.is-a.dev/" />
        <meta
          property="og:image"
          content="https://gauresh.is-a.dev/logo-black.png"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gauresh G Pai — Software Engineer | React, Next.js & TypeScript"
        />
        <meta
          name="twitter:description"
          content="Software Engineer with 9+ client projects delivered. Specializing in React, Next.js, TypeScript, and full-stack web development."
        />
        <meta
          name="twitter:image"
          content="https://gauresh.is-a.dev/logo-black.png"
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gauresh G Pai",
              jobTitle: "Software Engineer",
              url: "https://gauresh.is-a.dev/",
              image: "https://gauresh.is-a.dev/logo-black.png",
              description:
                "Software Engineer with 9+ client projects delivered. Specializing in React, Next.js, TypeScript, and full-stack web development.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mangaluru",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              knowsAbout: [
                "TypeScript",
                "React",
                "Next.js",
                "TailwindCSS",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "Supabase",
                "Git",
                "Azure",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "AJ Institute of Engineering & Technology",
                url: "https://ajiet.edu.in/",
              },
              sameAs: [
                "https://github.com/gaureshpai",
                "https://www.npmjs.com/~gaureshpai",
                "https://www.linkedin.com/in/gaureshpai",
                "https://gauresh.is-a.dev/",
              ],
            }),
          }}
        />
      </Head>
      <iframe
        src="/site.html"
        title="Gauresh G Pai - Software Engineer"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
