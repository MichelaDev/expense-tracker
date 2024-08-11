"use server"

import { CategoryType, ExpenseType } from "@/types";
import { supabaseClient } from "@/utils/supabase/server";

export const InsertNewExpense = async ({ newExpense }: { newExpense: ExpenseType }) => {
  const { error } = await supabaseClient
    .from("expenses")
    .insert(newExpense);
};

export const InsertNewCategory = async ({ newCategory }: { newCategory: string }) => {
  console
  const { error } = await supabaseClient
    .from("categories")
    .insert({name: newCategory});
  console.log(error)
};

export const GetCategories = async (): Promise<CategoryType[]> => {
  const { data, error } = await supabaseClient
  .from('categories')
  .select()

  return data as CategoryType[]
}
