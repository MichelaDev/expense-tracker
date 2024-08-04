"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

const ExpenseForm = () => {
  const [newExpense, setNewExpense] = useState({
    date: "",
    category: "",
    description: "",
    amount: "",
  });
  const router = useRouter();
  return (
    <>
      <div className="grid gap-2 mb-3">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          className="p-2 bg-secondary border border-primary rounded"
          value={newExpense.date}
          onChange={(e) =>
            setNewExpense({ ...newExpense, date: e.target.value })
          }
        />
      </div>
      <div className="grid gap-2 mb-3">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={newExpense.category}
          className="p-2 bg-secondary border border-primary rounded"
          onChange={(e) =>
            setNewExpense({ ...newExpense, category: e.target.value })
          }
        >
          <option className="text-tertiary" value="">
            Select a category
          </option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transportation">Transportation</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid gap-2 mb-3">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={newExpense.description}
          className="p-2 bg-secondary border border-primary rounded"
          onChange={(e) =>
            setNewExpense({ ...newExpense, description: e.target.value })
          }
        />
      </div>
      <div className="grid gap-2 mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          value={newExpense.amount}
          className="p-2 bg-secondary border border-primary rounded"
          onChange={(e) =>
            setNewExpense({ ...newExpense, amount: e.target.value })
          }
        />
      </div>
      <Button full onClick={() => router.push("/login")}>Add Expense</Button>
    </>
  );
};

const CategoryForm = () => {
  const [newCategory, setNewCategory] = useState("");
  const categories = [
    "Groceries",
    "Utilities",
    "Entertainment",
    "Transpotation",
  ];
  return (
    <div className="flex flex-col gap-4">
      <h4 className="px-3 text-lg">Categories</h4>
      <ul className="max-h-64 overflow-auto px-3 rounded border-b border-primary">
        {categories.map((category) => (
          <li key={category} className="flex items-center pb-2 gap-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
            {category}
          </li>
        ))}
      </ul>
      <div className="flex gap-2 items-center">
        <label htmlFor="newCategory">New category</label>
        <input
          id="newCategory"
          type="text"
          className="p-1 bg-secondary border border-primary rounded"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <Button>Add</Button>
      </div>
    </div>
  );
};

const AddExpense = () => {
  const [isCategory, setIsCategory] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsCategory(!isCategory)}
        className="flex justify-end items-center ml-auto text-sm gap-1 hover:text-tertiary"
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
      {isCategory ? <CategoryForm /> : <ExpenseForm />}
    </>
  );
};

export default AddExpense;
