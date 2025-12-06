import Image from "next/legacy/image";
import { NextSeo } from "next-seo";
import type { Certificate } from "@/data/certificates";

const CertificatesPage = ({
  certificates,
}: {
  certificates: Certificate[];
}) => {
  return (
    <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
      <NextSeo
        title="Certificates | Gauresh G Pai"
        description="Explore the certificates earned by Gauresh G Pai from various platforms like Coursera, Udemy, and UiPath, showcasing expertise in web development, automation, and more."
        openGraph={{
          title: "Certificates | Gauresh G Pai",
          description:
            "A collection of certificates earned by Gauresh G Pai from platforms like Coursera, Udemy, and UiPath, demonstrating a commitment to continuous learning and skill development.",
          url: "https://gauresh.is-a.dev/certificates",
          siteName: "Gauresh G Pai",
          type: "website",
          images: [
            {
              url: "https://gauresh.is-a.dev/logo.png",
              width: 1200,
              height: 630,
              alt: "Certificates | Gauresh G Pai - Preview",
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
              "Gauresh G Pai certificates, Gauresh G Pai, certificates, web development, react, next.js, typescript, coursera, udemy, uipath, automation",
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
          },
        ]}
      />
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
  const certificates = getCertificates();
  return {
    props: {
      certificates,
    },
  };
}

export default CertificatesPage;
