import Head from "next/head";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import CreateNewBook from "@/components/forms/CreateNewBook";

export default function DashBoard() {
  return (
    <>
      <Head>
        <title>Dashboard | AuthorCraft</title>
      </Head>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Dashboard
            </h1>
            <p className="max-w-md mt-4 text-gray-500">
              Hey author! Welcome to your Dashboard!
            </p>
          </header>

          <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="block overflow-hidden group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 transition duration-500 text-hanko-red group-hover:scale-105"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="relative pt-3 bg-white">
                    <h2 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Create
                    </h2>
                    <p className="mt-2">
                      <span className="tracking-wider text-gray-900">
                        Create a new book
                      </span>
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create a book</DialogTitle>
                  <DialogDescription>
                    Create a new book here. Fill in all details and click save
                    when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <CreateNewBook />
              </DialogContent>
            </Dialog>

            <Link href="#" className="block overflow-hidden group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 transition text-hanko-red duration-500 group-hover:scale-105"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <div className="relative pt-3 bg-white">
                <h2 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Read
                </h2>
                <p className="mt-2">
                  <span className="tracking-wider text-gray-900">
                    Read a book
                  </span>
                </p>
              </div>
            </Link>

            <Link href="#" className="block overflow-hidden group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 transition text-hanko-red duration-500 group-hover:scale-105"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>

              <div className="relative pt-3 bg-white">
                <h2 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Edit
                </h2>
                <p className="mt-2">
                  <span className="tracking-wider text-gray-900">
                    Edit a book
                  </span>
                </p>
              </div>
            </Link>

            <Link href="#" className="block overflow-hidden group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 transition text-hanko-red duration-500 group-hover:scale-105"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>

              <div className="relative pt-3 bg-white">
                <h2 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Delete
                </h2>

                <p className="mt-2">
                  <span className="tracking-wider text-gray-900">
                    Delete a book
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
