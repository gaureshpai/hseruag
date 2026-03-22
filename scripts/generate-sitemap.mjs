import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://gauresh.is-a.dev";
const PUBLIC_DIR = path.join(process.cwd(), "public");
const SUPPORTED_IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
  ".avif",
]);

function formatImageLabel(filePath) {
  const parsed = path.parse(filePath);
  return parsed.name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function getPagePathFromPublicPath(publicPath) {
  if (publicPath.startsWith("/projects/")) return "/projects";
  if (publicPath.startsWith("/works/")) return "/works";
  if (publicPath.startsWith("/certs/")) return "/certificates";
  return "/";
}

function walkPublicDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkPublicDir(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function generateSiteMap() {
  const currentDate = new Date().toISOString();
  const allImages = walkPublicDir(PUBLIC_DIR)
    .filter((filePath) => SUPPORTED_IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase()))
    .map((filePath) => {
      const relativePath = `/${path.relative(PUBLIC_DIR, filePath).replace(/\\/g, "/")}`;
      const label = formatImageLabel(relativePath);
      return {
        url: `${SITE_URL}${relativePath}`,
        title: label,
        caption: `${label} image from Gauresh G Pai's portfolio`,
        pagePath: getPagePathFromPublicPath(relativePath),
      };
    });

  const imagesByPage = {
    "/": [],
    "/projects": [],
    "/works": [],
    "/certificates": [],
  };

  for (const image of allImages) {
    if (imagesByPage[image.pagePath]) {
      imagesByPage[image.pagePath].push(image);
    }
  }

  const staticPages = [
    { loc: `${SITE_URL}/`, lastmod: currentDate, changefreq: "weekly", priority: 1.0, images: imagesByPage["/"] },
    { loc: `${SITE_URL}/about/`, lastmod: currentDate, changefreq: "monthly", priority: 0.8, images: [] },
    { loc: `${SITE_URL}/projects/`, lastmod: currentDate, changefreq: "weekly", priority: 0.9, images: imagesByPage["/projects"] },
    { loc: `${SITE_URL}/works/`, lastmod: currentDate, changefreq: "weekly", priority: 0.9, images: imagesByPage["/works"] },
    { loc: `${SITE_URL}/certificates/`, lastmod: currentDate, changefreq: "monthly", priority: 0.7, images: imagesByPage["/certificates"] },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticPages
    .map((page) => {
      const imageTags = (page.images || [])
        .map(
          (img) => `
    <image:image>
      <image:loc>${escapeXml(img.url)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`,
        )
        .join("");
      return `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${imageTags}
  </url>`;
    })
    .join("")}
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap);
  console.log("Sitemap generated at public/sitemap.xml");
}

generateSiteMap();
