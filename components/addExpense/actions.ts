"use server";

import { CategoryType, ExpenseType } from "@/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";

export type FormState = {
  message: {[key: string]: string};
  error?: string;
  success?: boolean;
};

const schema = z.object({
  date: z.string().min(1,"Date is required"),
  category: z.string().min(1,"Category is required"),
  description: z.string(),
  amount: z.string().min(1,"Amount is required"),
});

export const insertNewExpense = async (
  prevState: FormState,
  formData: FormData
) => {

  const date = formData.get("date") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const amount = formData.get("amount") as string;

  const newExpense = { date: new Date(date), category, description, amount };

  const validation = schema.safeParse(newExpense);

  if (!validation.success) {
    const message: {[key: string]: string} = {}
    validation.error.errors.forEach((error) => message[error.path[0]] = error.message);
    return { message };
  }

  const supabaseClient = createClient(cookies());
  const { error } = await supabaseClient.from("expenses").insert(newExpense);

  if (error) {
    return { message: {}, error: error.message };
  }

  revalidatePath("/");

  return { message: {}, error: "", success: true };
};

export const InsertNewCategory = async ({
  newCategory,
}: {
  newCategory: string;
}) => {
  const supabaseClient = createClient(cookies());
  const { error } = await supabaseClient
    .from("categories")
    .insert({ name: newCategory });

  revalidatePath("/");

  return {error}
};

export const DeleteCategory = async ({ id }: { id: string }) => {
  const supabaseClient = createClient(cookies());
  const { error } = await supabaseClient
    .from("categories")
    .delete()
    .eq("id", id);

    console.log(error)

  revalidatePath("/");
};
