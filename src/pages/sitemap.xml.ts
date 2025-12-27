import type { GetServerSideProps } from "next";

const SITE_URL = "https://gauresh.is-a.dev";

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

function generateSiteMap(urls: SitemapURL[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
           xmlns:xhtml="http://www.w3.org/1999/xhtml"
           xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
           xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
           xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
     ${urls
       .map((url) => {
         return `
       <url>
           <loc>${url.loc}</loc>
           <lastmod>${url.lastmod}</lastmod>
           <changefreq>${url.changefreq}</changefreq>
           <priority>${url.priority}</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const currentDate = new Date().toISOString();

  // Define static pages with their properties
  const staticPages: SitemapURL[] = [
    {
      loc: `${SITE_URL}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: `${SITE_URL}/about`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: `${SITE_URL}/projects`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${SITE_URL}/works`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: `${SITE_URL}/certificates`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
    },
  ];

  // Generate the XML sitemap
  const sitemap = generateSiteMap(staticPages);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200",
  );

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
