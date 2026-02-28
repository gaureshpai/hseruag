import type { GetServerSideProps } from "next";
import { SITE_URL } from "@/constants/site";
import type { PublicImage } from "@/server/public-images";

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
  images?: PublicImage[];
}

/**
 * Escape special XML characters in a string.
 *
 * @param value - The string to escape for safe inclusion in XML
 * @returns The input string with `&`, `<`, `>`, `"` and `'` replaced by their XML entity equivalents
 */
function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/**
 * Builds an XML sitemap document from a list of sitemap entries, including optional image metadata.
 *
 * @param urls - Array of sitemap entries. If an entry includes `images`, each image's `url`, `title`, and `caption` are rendered as `image:image` blocks and XML-escaped.
 * @returns The complete sitemap XML as a string suitable for serving at /sitemap.xml
 */
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
         const imageTags = (url.images || [])
           .map(
             (image) => `
          <image:image>
            <image:loc>${escapeXml(image.url)}</image:loc>
            <image:title>${escapeXml(image.title)}</image:title>
            <image:caption>${escapeXml(image.caption)}</image:caption>
          </image:image>`,
           )
           .join("");

         return `
       <url>
           <loc>${url.loc}</loc>
           <lastmod>${url.lastmod}</lastmod>
           <changefreq>${url.changefreq}</changefreq>
           <priority>${url.priority}</priority>
           ${imageTags}
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
  const { getPublicImagesByPage } = await import("@/server/public-images");
  const imagesByPage = getPublicImagesByPage();

  // Define static pages with their properties
  const staticPages: SitemapURL[] = [
    {
      loc: `${SITE_URL}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 1.0,
      images: imagesByPage["/"],
    },
    {
      loc: `${SITE_URL}/about`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8,
      images: [],
    },
    {
      loc: `${SITE_URL}/projects`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
      images: imagesByPage["/projects"],
    },
    {
      loc: `${SITE_URL}/works`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.9,
      images: imagesByPage["/works"],
    },
    {
      loc: `${SITE_URL}/certificates`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7,
      images: imagesByPage["/certificates"],
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
