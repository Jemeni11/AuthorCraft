import React, { useState, useCallback } from "react";
import Head from "next/head";

export default function DashBoard() {
  return (
    <>
      <Head>
        <title>Workshop: Edit Mode | AuthorCraft</title>
      </Head>
      <header className="mb-4 w-full flex justify-between items-center py-4 px-[5%]">
        <span className="italic">AuthorCraft</span>
        <h1 className="hidden md:block text-4xl font-black text-center text-black uppercase">
          Workshop
        </h1>
      </header>
    </>
  );
}
