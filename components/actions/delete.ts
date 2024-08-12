"use server"

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const deleteCategory = async ({ id }: { id: string }) => {
  const supabaseClient = createClient(cookies());
  const { error } = await supabaseClient
    .from("categories")
    .delete()
    .eq("id", id);

    console.log(error)

  revalidatePath("/");
};

export const deleteExpense = async ({ id }: { id: string }) => {
  const supabaseClient = createClient(cookies());
  const { error } = await supabaseClient
    .from("expenses")
    .delete()
    .eq("id", id);

    console.log(error)

  revalidatePath("/");
};