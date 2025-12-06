import type { NextSeoProps } from "next-seo";
import React from "react";

const SITE_URL = "https://gauresh.is-a.dev";
const SITE_NAME = "Gauresh G Pai";
const TWITTER_HANDLE = "@hseruag";

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: "website" | "article" | "profile";
    article?: {
      publishedTime?: string;
      modifiedTime?: string;
      authors?: string[];
      tags?: string[];
    };
  };
  additionalMetaTags?: NextSeoProps["additionalMetaTags"];
}

export function generateSEOConfig(config: SEOConfig): NextSeoProps {
  const {
    title,
    description,
    canonical = SITE_URL,
    openGraph = {},
    additionalMetaTags = [],
  } = config;

  const ogTitle = openGraph.title || title;
  const ogDescription = openGraph.description || description;
  const ogType = openGraph.type || "website";

  // Generate dynamic OG image URL
  const ogImageUrl = `${SITE_URL}/api/og?title=${encodeURIComponent(
    title,
  )}&description=${encodeURIComponent(description)}&page=${encodeURIComponent(
    title.split("|")[0].trim(),
  )}`;

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
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Preview`,
          type: "image/png",
        },
      ],
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
        content: "index, follow",
      },
      {
        name: "googlebot",
        content: "index, follow",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=5",
      },
      {
        name: "theme-color",
        content: "#8b5cf6",
      },
      {
        name: "msapplication-TileColor",
        content: "#8b5cf6",
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
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

// Helper to inject JSON-LD into page
export function injectJSONLD(data: object | object[]) {
  const schemas = Array.isArray(data) ? data : [data];
  return schemas.map((schema, index) => (
    <script
      key={`jsonld-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
