import Head from "next/head";
import Image from "next/legacy/image";
import { NextSeo } from "next-seo";
import type { Certificate } from "@/data/certificates";
import {
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generateImageCollectionSchema,
  generateSEOConfig,
  injectJSONLD,
} from "@/utils/seo";

const CertificatesPage = ({
  certificates,
  imageGallerySchema,
}: {
  certificates: Certificate[];
  imageGallerySchema: object;
}) => {
  const seoConfig = generateSEOConfig({
    title: "Certificates",
    description:
      "View Gauresh G Pai's professional certificates and certifications from Coursera, Udemy, UiPath, and other platforms. Showcasing continuous learning in web development, React, Next.js, TypeScript, automation, and modern technologies.",
    canonical: "https://gauresh.is-a.dev/certificates",
    openGraph: {
      title: "Professional Certificates - Gauresh G Pai",
      description:
        "Collection of professional certifications demonstrating expertise and commitment to continuous learning in web development and software engineering.",
      type: "website",
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "Gauresh G Pai Certificates, Professional Certifications, Coursera Certificates, Udemy Certificates, UiPath Certification, Web Development Certificates, React Certification, TypeScript Certification, Professional Qualifications, Continuous Learning, Skill Development, Training Certificates",
      },
    ],
  });

  const collectionSchema = generateCollectionPageSchema({
    name: "Professional Certificates by Gauresh G Pai",
    description:
      "A comprehensive collection of professional certificates and qualifications demonstrating continuous learning and expertise in web development.",
    url: "https://gauresh.is-a.dev/certificates",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://gauresh.is-a.dev" },
    { name: "Certificates", url: "https://gauresh.is-a.dev/certificates" },
  ]);

  return (
    <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
      <NextSeo {...seoConfig} />
      <Head>
        {injectJSONLD([collectionSchema, breadcrumbSchema, imageGallerySchema])}
      </Head>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
          Certificates
        </h1>
        <div className="my-2">
          <span className="text-sm text-muted-foreground">
            A showcase of professional certifications and qualifications earned,
            sorted by priority and recency.
          </span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2">
          {certificates.map((certificate: Certificate, index: number) => (
            <div
              key={`certificate-${index}-${certificate.title}`}
              className="relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 dark:bg-zinc-800 dark:text-white"
            >
              <div
                className="relative mb-4 w-full overflow-hidden rounded-lg"
                style={{ paddingBottom: "56.25%" }}
              >
                <Image
                  layout="fill"
                  src={certificate.screenshot}
                  alt={`${certificate.title} screenshot`}
                  className="rounded-lg object-contain transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 4}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const { getCertificates } = await import("@/data/certificates");
  const { getPublicImagesByPage } = await import("@/server/public-images");
  const certificates = getCertificates();
  const imagesByPage = getPublicImagesByPage();
  const imageGallerySchema = generateImageCollectionSchema({
    name: "Certificates Image Gallery",
    url: "https://gauresh.is-a.dev/certificates",
    description:
      "Professional certificates and certifications earned by Gauresh G Pai.",
    images: imagesByPage["/certificates"].map((image) => ({
      url: image.url,
      title: image.title,
      caption: image.caption,
    })),
  });
  return {
    props: {
      certificates,
      imageGallerySchema,
    },
  };
}

export default CertificatesPage;
