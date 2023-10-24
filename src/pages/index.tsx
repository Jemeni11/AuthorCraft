import Head from "next/head";
import Link from "next/link";

export default function Home() {
  function handleScroll() {
    // TODO: scroll down by 100vh
  }
  return (
    <>
      <Head>
        <title>Home | AuthorCraft</title>
        <meta property="og:url" content="https://author-craft.vercel.app/" />
        <meta property="og:title" content="Home | AuthorCraft" />
        <meta name="twitter:url" content="https://author-craft.vercel.app/" />
        <meta name="twitter:title" content="Home | AuthorCraft" />
      </Head>
      <section className="min-h-screen bg-hanko-blue text-white">
        <div className="bg-indigo-600 px-4 py-3 text-white">
          <p className="text-center text-sm font-medium">
            Love AuthorCraft? Give it a star on
            <a
              href="https://github.com/Jemeni11/AuthorCraft"
              className="inline-block underline"
            >
              GitHub
            </a>
            !
          </p>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-[#ff9fa8] via-hanko-red to-[#c80832] bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Unleash Your Writing Potential.{" "}
              <span className="sm:block">Create Novels Effortlessly.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Are you ready to embark on your literary journey, crafting stories
              that captivate the world? Welcome to AuthorCraft, your ultimate
              companion in the world of digital authorship!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/login"
              >
                Get Started
              </Link>

              <button
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                type="button"
                onClick={handleScroll}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
