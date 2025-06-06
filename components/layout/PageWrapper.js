import React from "react";
import Head from "next/head";
import Script from "next/script";
import { Header, Footer } from "../../components/ComponentIndex";
import { useRouter } from "next/router";

export default function PageWrapper({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Ian Steele - Digital product designer and Illustrator",
    description: `I am a digital product designer & Illustrator with 12+ years of experience. Get in touch with me to know more.`,
    image: "opengraph-image.jpg",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-6 mx-auto overflow-x-hidden overflow-y-auto transition-colors duration-500 bg-brand-primary">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://iansteele.design${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://iansteele.design${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Ian Steele" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        ;
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JGCF7JM0W2"
        ></Script>
      </Head>

      <Header />
      <main className="flex flex-col items-center flex-grow w-full min-w-full pt-20 space-y-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
