import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { SITE_URL } from "@/constants/site";

import MainLayout from "@/layout/main-layout";
import "@/styles/globals.css";

const CursorTrailCanvas = dynamic(
  () => import("@/components/cursor-trail-canvas"),
  { ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <DefaultSeo
        defaultTitle="Gauresh G Pai | Software Engineer Portfolio"
        titleTemplate="%s | Gauresh G Pai"
        description="Professional portfolio of Gauresh G Pai, a Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies. Explore projects, experience, and certifications."
        canonical={SITE_URL}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: SITE_URL,
          siteName: "Gauresh G Pai",
          images: [
            {
              url: `${SITE_URL}/logo.png`,
              width: 1200,
              height: 630,
              alt: "Gauresh G Pai - Software Engineer",
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
            name: "referrer",
            content: "strict-origin-when-cross-origin",
          },
          {
            name: "format-detection",
            content: "telephone=no,address=no,email=no",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=5",
          },
        ]}
      />
      <ThemeProvider attribute="class" defaultTheme="light">
        <MainLayout>
          <AnimatePresence mode="wait" initial={false}>
            <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 hidden h-full w-full md:flex" />
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
