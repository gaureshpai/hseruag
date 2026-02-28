import { Head, Html, Main, NextScript } from "next/document";

/**
 * Custom Next.js Document that defines the HTML shell: language, font preconnects, and global body classes.
 *
 * @returns The root document JSX containing <Html lang="en"> with <Head> preconnect/dns-prefetch links and a <body> that renders <Main /> and <NextScript />.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="bg-background text-black antialiased selection:bg-accent selection:text-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
