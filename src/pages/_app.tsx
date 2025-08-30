import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import MainLayout from "@/layout/main-layout";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <MainLayout>
          <CursorTrailCanvas className="pointer-events-none hidden md:flex fixed inset-0 -z-10 h-full w-full" />
          <AnimatePresence mode="wait" initial={false}>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
