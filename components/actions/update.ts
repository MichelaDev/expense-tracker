"use server"

import { ExpenseType } from "@/types";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { FormState } from "./insert";
import { revalidatePath } from "next/cache";
import { schema } from "./utils";

export const updateExpense = async (
  prevState: FormState,
  formData: FormData
) => {

  const id = formData.get("id") as string;

  if(!id) return { message: "", error: "Invalid ID" };

  const date = formData.get("date") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const amount = formData.get("amount") as string;

  const newExpense = { id, date: new Date(date), category, description, amount };

  console.log(newExpense, id)

  const validation = schema.safeParse(newExpense);

  if (!validation.success) {
    const message: {[key: string]: string} = {}
    validation.error.errors.forEach((error) => message[error.path[0]] = error.message);
    return { message };
  }

  const supabaseClient = createClient(cookies());
  const { error } = await supabaseClient
    .from("expenses")
    .upsert(newExpense)

  if (error) {
    console.log(error)
    return { message: {}, error: error.message };
  }

  revalidatePath("/");

  return { message: {}, error: "", success: true };
};
