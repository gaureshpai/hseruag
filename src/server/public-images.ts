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

/**
 * Create a human-friendly label from an image file path.
 *
 * @param filePath - File path or filename to derive the label from
 * @returns The file's base name with hyphens and underscores replaced by single spaces and surrounding whitespace removed
 */
function formatImageLabel(filePath: string): string {
  const parsed = path.parse(filePath);
  return parsed.name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

/**
 * Determine the site page category for a given web-relative public asset path.
 *
 * @param publicPath - Web-relative path of the asset starting with `/` (for example `/projects/image.jpg`)
 * @returns One of `/projects`, `/works`, `/certificates`, or `/` depending on the leading segment of `publicPath`
 */
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

/**
 * Recursively enumerates all files under the given directory and returns their full file system paths.
 *
 * @param dir - Path to the directory to walk
 * @returns An array of absolute file paths for every file found under `dir`
 */
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

let cachedImages: PublicImage[] | null = null;

/**
 * Collects metadata for all supported image files under the public directory.
 *
 * The result is cached for subsequent calls. If the public directory does not exist, an empty array is returned.
 *
 * @returns An array of `PublicImage` objects (sorted by `path`) describing each discovered image
 */
export function getAllPublicImages(): PublicImage[] {
  if (cachedImages) {
    return cachedImages;
  }

  if (!fs.existsSync(PUBLIC_DIR)) {
    return [];
  }

  cachedImages = walkPublicDir(PUBLIC_DIR)
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
        caption: `${label} image from Gauresh G Pai's portfolio`,
        pagePath: getPagePathFromPublicPath(relativePath),
        lastModifiedISO: stats.mtime.toISOString(),
      };
    })
    .sort((a, b) => a.path.localeCompare(b.path));

  return cachedImages;
}

/**
 * Group all discovered public images by their inferred page path.
 *
 * @returns An object with keys "/", "/projects", "/works", and "/certificates", each mapped to an array of `PublicImage` objects belonging to that page
 */
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
