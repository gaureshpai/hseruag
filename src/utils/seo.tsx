import type { NextSeoProps } from "next-seo";
import { SITE_URL } from "@/constants/site";

const SITE_NAME = "Gauresh G Pai";
const TWITTER_HANDLE = "@hseruag";

export interface SEOConfig {
  title?: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: "website" | "article" | "profile";
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
      type?: string;
    }>;
    article?: {
      publishedTime?: string;
      modifiedTime?: string;
      authors?: string[];
      tags?: string[];
    };
  };
  additionalMetaTags?: NextSeoProps["additionalMetaTags"];
}

/**
 * Build a NextSeoProps object from a lightweight SEO configuration.
 *
 * Uses provided values with sensible defaults: page title falls back to "Software Engineer",
 * `canonical` defaults to the site URL, Open Graph fields fall back to title/description/type,
 * and a default Open Graph image is added when none are provided. Additional meta and link tags
 * are merged into the resulting configuration.
 *
 * @param config - Partial SEO configuration that may include title, description, canonical URL,
 *                 Open Graph data, and extra meta tags.
 * @returns The complete NextSeoProps object ready to pass to a Next.js SEO component.
 */
export function generateSEOConfig(config: SEOConfig): NextSeoProps {
  const {
    title: pageTitle,
    description,
    canonical = SITE_URL,
    openGraph = {},
    additionalMetaTags = [],
  } = config;

  const title = pageTitle ? `${pageTitle}` : "Software Engineer";

  const ogTitle = openGraph.title || title;
  const ogDescription = openGraph.description || description;
  const ogType = openGraph.type || "website";
  const ogImages = openGraph.images || [
    {
      url: `${SITE_URL}/logo.png`,
      width: 1200,
      height: 630,
      alt: `${title} - Preview`,
      type: "image/png",
    },
  ];

  return {
    title,
    description,
    canonical,
    openGraph: {
      url: canonical,
      title: ogTitle,
      description: ogDescription,
      type: ogType,
      siteName: SITE_NAME,
      images: ogImages,
      ...(ogType === "article" && openGraph.article
        ? { article: openGraph.article }
        : {}),
    },
    twitter: {
      handle: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "author",
        content: SITE_NAME,
      },
      {
        name: "robots",
        content:
          "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      {
        name: "googlebot",
        content:
          "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      {
        name: "bingbot",
        content:
          "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=5",
      },
      {
        name: "referrer",
        content: "strict-origin-when-cross-origin",
      },
      {
        name: "format-detection",
        content: "telephone=no,address=no,email=no",
      },
      {
        name: "theme-color",
        content: "#8b5cf6",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      ...additionalMetaTags,
    ],
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/logo.png",
        sizes: "180x180",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  };
}

// JSON-LD Structured Data Generators
export interface PersonSchema {
  name: string;
  url: string;
  jobTitle: string;
  description: string;
  image?: string;
  sameAs?: string[];
  knowsAbout?: string[];
}

export function generatePersonSchema(data: PersonSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    url: data.url,
    jobTitle: data.jobTitle,
    description: data.description,
    image: data.image || `${SITE_URL}/logo.png`,
    sameAs: data.sameAs || [
      "https://github.com/GaureshPai",
      "https://linkedin.com/in/gaureshgpai",
      "https://twitter.com/hseruag",
    ],
    knowsAbout: data.knowsAbout || [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Frontend Development",
      "Web Development",
    ],
  };
}

export interface WebsiteSchema {
  name: string;
  url: string;
  description: string;
}

/**
 * Generate a JSON-LD WebSite schema for the provided site metadata.
 *
 * @param data - Site metadata containing `name`, `url`, and `description`
 * @returns A JSON-LD object representing a schema.org `WebSite` with the site name, URL, description, an author set to the library's site name, a `ReadAction` potentialAction targeting the site URL, and `inLanguage` set to "en-US"
 */
export function generateWebsiteSchema(data: WebsiteSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.name,
    url: data.url,
    description: data.description,
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
    potentialAction: {
      "@type": "ReadAction",
      target: [data.url],
    },
    inLanguage: "en-US",
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface ProjectSchema {
  name: string;
  description: string;
  url?: string;
  image?: string;
  author: string;
  dateCreated?: string;
  keywords?: string[];
}

export function generateProjectSchema(data: ProjectSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": data.url || `${SITE_URL}/projects`,
    name: data.name,
    description: data.description,
    url: data.url,
    image: data.image,
    author: {
      "@type": "Person",
      name: data.author,
    },
    dateCreated: data.dateCreated,
    keywords: data.keywords,
    inLanguage: "en-US",
  };
}

export interface CollectionPageSchema {
  name: string;
  description: string;
  url: string;
}

/**
 * Generate a Schema.org CollectionPage JSON-LD object for a collection page.
 *
 * @param data - Values to populate the CollectionPage schema (`name`, `description`, `url`)
 * @returns A JSON-LD object representing a `CollectionPage` with an `author` set to the site name and `inLanguage` set to `en-US`
 */
export function generateCollectionPageSchema(data: CollectionPageSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.name,
    description: data.description,
    url: data.url,
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
    inLanguage: "en-US",
  };
}

export interface ImageSchemaItem {
  url: string;
  title: string;
  caption?: string;
}

export interface ImageCollectionSchema {
  name: string;
  url: string;
  description: string;
  images: ImageSchemaItem[];
}

export interface ImageCollectionSchemaResult {
  "@context": "https://schema.org";
  "@type": "ImageGallery";
  name: string;
  url: string;
  description: string;
  inLanguage: "en-US";
  associatedMedia: Array<{
    "@type": "ImageObject";
    contentUrl: string;
    url: string;
    name: string;
    caption: string;
  }>;
}

/**
 * Generate a JSON-LD ImageGallery schema for a collection of images.
 *
 * @param data - Collection metadata and the list of images (each with `url`, `title`, and optional `caption`)
 * @returns A JSON-LD `ImageGallery` object whose `associatedMedia` is an array of `ImageObject` entries for each image
 */
export function generateImageCollectionSchema(
  data: ImageCollectionSchema,
): ImageCollectionSchemaResult {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: data.name,
    url: data.url,
    description: data.description,
    inLanguage: "en-US",
    associatedMedia: data.images.map((image) => ({
      "@type": "ImageObject",
      contentUrl: image.url,
      url: image.url,
      name: image.title,
      caption: image.caption || image.title,
    })),
  };
}

/**
 * Create React script elements that embed one or more JSON-LD schema objects.
 *
 * @param data - A schema object or an array of schema objects to be serialized as JSON-LD
 * @returns An array of React `<script>` elements (type "application/ld+json") each containing the JSON-LD string of a schema object
 */
export interface ItemListSchemaItem {
  name: string;
  url?: string;
  description?: string;
  image?: string;
}

export interface ItemListSchemaInput {
  name: string;
  url: string;
  description: string;
  items: ItemListSchemaItem[];
}

export interface ItemListSchemaResult {
  "@context": "https://schema.org";
  "@type": "ItemList";
  name: string;
  description: string;
  url: string;
  numberOfItems: number;
  itemListOrder: "https://schema.org/ItemListOrderAscending";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    item: {
      "@type": "CreativeWork";
      name: string;
      url?: string;
      description?: string;
      image?: string;
    };
  }>;
}

/**
 * Builds a JSON-LD `ItemList` schema for the provided collection of items.
 *
 * @param data - Object containing `name`, `url`, `description`, and `items` to include in the list
 * @returns A JSON-LD `ItemList` object whose `itemListElement` contains `ListItem` entries with positions matching the input order
 */
export function generateItemListSchema(
  data: ItemListSchemaInput,
): ItemListSchemaResult {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: data.name,
    description: data.description,
    url: data.url,
    numberOfItems: data.items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: data.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.name,
        url: item.url,
        description: item.description,
        image: item.image,
      },
    })),
  };
}

/**
 * Create React <script> elements that embed one or more JSON-LD schemas.
 *
 * @param data - A JSON-LD object or an array of JSON-LD objects to inject into the page
 * @returns An array of React <script> elements with type "application/ld+json", each containing a serialized schema
 */
export function injectJSONLD(data: object | object[]) {
  const schemas = Array.isArray(data) ? data : [data];
  return schemas.map((schema, index) => (
    <script
      key={`jsonld-${index + 1}`}
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: This is a valid use case for injecting JSON-LD.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
