import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  title: "AuthorCraft",
  description: "Your ultimate companion in the world of digital authorship.",
  name: "Emmanuel Jemeni",
  url: "https://author-craft.vercel.app/",
  image: "https://author-craft.vercel.app/Banner.jpg",
};

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: "%s | AuthorCraft",
  },
  keywords: [
    meta.name,
    "AuthorCraft",
    "book",
    "writing",
    "ebook",
    "publish",
    "epub",
    "pdf",
    "online",
  ],
  creator: meta.name,
  metadataBase: new URL(meta.url),
  description: meta.description,
  openGraph: {
    title: meta.title,
    url: meta.url,
    siteName: "vercel.app",
    locale: "en-US",
    type: "website",
    description: meta.description,
    images: meta.image,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    site: meta.url,
    description: meta.description,
    creator: "@Jemeni11",
    images: [meta.image],
  },
  alternates: {
    canonical: meta.url,
  },
};

export const viewport: Viewport = {
  // TODO: Change
  themeColor: "#142538",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
