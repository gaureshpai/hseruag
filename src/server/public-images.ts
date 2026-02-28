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

export type PublicImage = {
  path: string;
  url: string;
  title: string;
  caption: string;
  pagePath: "/" | "/projects" | "/works" | "/certificates";
  lastModifiedISO: string;
};

function formatImageLabel(filePath: string): string {
  const parsed = path.parse(filePath);
  return parsed.name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function getPagePathFromPublicPath(
  publicPath: string,
): PublicImage["pagePath"] {
  if (publicPath.startsWith("/projects/")) {
    return "/projects";
  }
  if (publicPath.startsWith("/works/")) {
    return "/works";
  }
  if (publicPath.startsWith("/certs/")) {
    return "/certificates";
  }
  return "/";
}

function walkPublicDir(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkPublicDir(fullPath));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

export function getAllPublicImages(): PublicImage[] {
  if (!fs.existsSync(PUBLIC_DIR)) {
    return [];
  }

  return walkPublicDir(PUBLIC_DIR)
    .filter((filePath) =>
      SUPPORTED_IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase()),
    )
    .map((filePath) => {
      const relativePath = `/${path
        .relative(PUBLIC_DIR, filePath)
        .replace(/\\/g, "/")}`;
      const label = formatImageLabel(relativePath);
      const stats = fs.statSync(filePath);

      return {
        path: relativePath,
        url: `${SITE_URL}${relativePath}`,
        title: label,
        caption: `${label} image from Gauresh G Pai portfolio`,
        pagePath: getPagePathFromPublicPath(relativePath),
        lastModifiedISO: stats.mtime.toISOString(),
      };
    })
    .sort((a, b) => a.path.localeCompare(b.path));
}

export function getPublicImagesByPage(): Record<
  PublicImage["pagePath"],
  PublicImage[]
> {
  const grouped: Record<PublicImage["pagePath"], PublicImage[]> = {
    "/": [],
    "/projects": [],
    "/works": [],
    "/certificates": [],
  };

  for (const image of getAllPublicImages()) {
    grouped[image.pagePath].push(image);
  }

  return grouped;
}
