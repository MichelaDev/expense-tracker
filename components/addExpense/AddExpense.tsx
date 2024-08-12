"use client";

import React, { useContext, useState } from "react";
import CategoryForm from "./CategoryForm";
import ExpenseForm from "./ExpenseForm";
import { UserContext } from "../UserContext";
import { CategoryType } from "@/types";

const AddExpense = ({ categories }: { categories: CategoryType[] }) => {
  const user = useContext(UserContext);
  const [isCategory, setIsCategory] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsCategory(!isCategory)}
        className="ml-auto flex items-center justify-end gap-1 text-sm hover:text-tertiary"
      >
        {isCategory ? "Return to expense" : "Go to categories"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
      {isCategory ? (
        <CategoryForm categories={categories} user={user} />
      ) : (
        <ExpenseForm type="insert" categories={categories} user={user} />
      )}
    </>
  );
};

export default AddExpense;
