import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

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
