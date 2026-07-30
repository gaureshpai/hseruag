import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0;url=/site.html" />
      </Head>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: safe static redirect
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/site.html');",
        }}
      />
    </>
  );
}
