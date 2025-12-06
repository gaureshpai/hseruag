import Link from "next/link";
import Image from "next/legacy/image";
import { ArrowTopRight } from "@/components/icons";
import type { Certificate } from "@/data/certificates";

interface CertificateShowcaseProps {
  certificates: Certificate[];
}

export default function CertificateShowcase({
  certificates,
}: CertificateShowcaseProps) {
  return (
    <section className="overflow-hidden px-6 py-16 pt-16 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-3xl">
          Featured Certificates:
        </h2>
        <div className="grid grid-cols-1 gap-6 py-14 md:grid-cols-2 lg:gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={`certificate-showcase-${index}`}
              className="relative overflow-hidden rounded-xl border bg-white p-4 shadow-sm dark:bg-zinc-800 dark:text-white"
            >
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  layout="fill"
                  src={certificate.screenshot}
                  alt={`${certificate.title} screenshot`}
                  className="rounded-lg object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/certificates"
          className="group relative flex max-w-max items-center gap-4 text-base font-semibold sm:text-lg md:text-xl"
        >
          <div className="relative max-w-max">
            <span className="text-accent">See more certificates</span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
          </div>
          <div className="h-8 w-8">
            <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
          </div>
        </Link>
      </div>
    </section>
  );
}
