import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title>AuthorCraft</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="AuthorCraft: Your ultimate companion in the world of digital authorship."
        />
        <meta
          name="keywords"
          content="AuthorCraft, book, writing, ebook, publish, epub, pdf, online"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="AuthorCraft: Your ultimate companion in the world of digital authorship."
        />
        <meta
          property="og:image"
          content="https://author-craft.vercel.app/android-chrome-512x512.png"
        />
        <meta name="twitter:domain" content="vercel.app/" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://author-craft.vercel.app/Banner.jpg"
        />
        <meta
          name="twitter:description"
          content="AuthorCraft: Your ultimate companion in the world of digital authorship."
        />
        <meta name="twitter:site" content="@Jemeni11" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
