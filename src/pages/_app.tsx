import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { DefaultSeo } from "next-seo";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

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
        defaultTitle="Gauresh G Pai | Frontend Developer Portfolio"
        titleTemplate="%s | Gauresh G Pai"
        description="Professional portfolio of Gauresh G Pai, a Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore projects, experience, and certifications."
        canonical="https://gauresh.is-a.dev"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://gauresh.is-a.dev",
          siteName: "Gauresh G Pai",
          images: [
            {
              url: "https://gauresh.is-a.dev/logo.png",
              width: 1200,
              height: 630,
              alt: "Gauresh G Pai - Frontend Developer",
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
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=5",
          },
          {
            name: "theme-color",
            content: "#8b5cf6",
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
