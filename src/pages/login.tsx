import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/apple-touch-icon.png";

const HankoAuth = dynamic(() => import("@/components/HankoAuth"), {
  ssr: false,
});

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | AuthorCraft</title>
        <meta
          property="og:url"
          content="https://author-craft.vercel.app/login"
        />
        <meta property="og:title" content="Login | AuthorCraft" />
        <meta
          name="twitter:url"
          content="https://author-craft.vercel.app/login"
        />
        <meta name="twitter:title" content="Login | AuthorCraft" />
      </Head>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <div className="absolute inset-0 h-full w-full object-cover opacity-80 bg-hanko-red" />
            <div className="hidden lg:relative lg:block lg:p-12">
              <Link className="block text-white" href="/">
                <span className="sr-only">Home</span>
                <Image src={Logo} alt="Logo" />
              </Link>
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to AuthorCraft 🖋
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                AuthorCraft empowers writers of all backgrounds to harness their
                creativity, providing a user-friendly and intuitive platform for
                crafting stories, novels, and ebooks.
              </p>
            </div>
          </section>
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <Link
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                  <Image src={Logo} alt="Logo" />
                </Link>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to AuthorCraft 🖋
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  AuthorCraft empowers writers of all backgrounds to harness
                  their creativity, providing a user-friendly and intuitive
                  platform for crafting stories, novels, and ebooks.
                </p>
              </div>

              <HankoAuth />
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
