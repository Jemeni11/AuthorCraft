import { createClient } from "@supabase/supabase-js";
import * as jose from "jose";
import type { Database } from "@/types/supabase";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Check if user exists
// If user exists
// Get their data
// Else create a new field for them

export const checkIfUserExists = async (user_ID: string) => {
  const { data, error } = await supabase
    .from("Workshop")
    .select("user_id")
    .eq("user_id", user_ID);

  if (error) {
    console.warn(error);
    return;
  }

  return data;
};

export const createABook = async (
  summary: string,
  user_id: string,
  storyName: string,
) => {
  const currentDate = new Date().toISOString();
  const newBook: Database["public"]["Tables"]["Workshop"]["Insert"] = {
    date_updated: currentDate,
    summary,
    user_id,
    work_name: storyName,
    date_created: currentDate,
  };

  const { data, error } = await supabase
    .from("Workshop")
    .insert(newBook)
    .select();

  // TODO: Remove this
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("data auth user", user);

  if (error) {
    console.warn(error);
    return;
  }

  return data;
};

export const readABook = async (workID: string) => {
  const { data, error } = await supabase
    .from("Chapters")
    .select("*")
    .eq("storyID", workID);

  if (error) {
    console.warn(error);
    return;
  }

  return data;
};

export const readAChapter = async (chapterID: string) => {
  const { data, error } = await supabase
    .from("Chapters")
    .select("id, chapter_name, chapter_order_in_story")
    .eq("id", chapterID);

  if (error) {
    console.warn(error);
    return;
  }

  return data;
};

export const updateABook = async (
  id: string,
  summary?: string,
  work_name?: string,
) => {
  const currentDate = new Date().toISOString();
  let updatedBook: Database["public"]["Tables"]["Workshop"]["Update"] = {};

  if (summary === undefined && work_name === undefined) {
    alert("You need to change the summary or the book name");
    return;
  } else if (summary) {
    updatedBook["summary"] = summary;
  } else if (work_name) {
    updatedBook["work_name"] = work_name;
  }

  updatedBook["date_updated"] = currentDate;

  const { data, error } = await supabase
    .from("Workshop")
    .update(updatedBook)
    .eq("id", id);

  if (error) {
    console.warn(error);
    return;
  }

  return data;
};

export const updateAChapter = async (
  id: string,
  chapterName?: string,
  chapter_order_in_story?: number,
  chapter_text?: string,
) => {
  const currentDate = new Date().toISOString();
  let updatedChapter: Database["public"]["Tables"]["Chapters"]["Update"] = {};

  if (
    chapter_order_in_story === undefined &&
    chapterName === undefined &&
    chapter_text === undefined
  ) {
    alert("You need to change something");
    return;
  } else if (chapter_order_in_story) {
    updatedChapter["chapter_order_in_story"] = chapter_order_in_story;
  } else if (chapterName) {
    updatedChapter["chapter_name"] = chapterName;
  } else if (chapter_text) {
    updatedChapter["chapter_text"] = chapter_text;
  }

  updatedChapter["updated_at"] = currentDate;

  const { data, error } = await supabase
    .from("Chapters")
    .update(updatedChapter)
    .eq("id", id);

  if (error) {
    console.warn(error);
    return;
  }

  return data;
};

export const deleteABook = async (id: string) => {};

export const deleteAChapter = async (id: string) => {};
