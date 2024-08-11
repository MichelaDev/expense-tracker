import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { CategoryType } from "@/types";
import { GetCategories, InsertNewCategory } from "./actions";

const CategoryForm = ({ categories }: { categories: CategoryType[] }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleSubmit = () => {
    InsertNewCategory({newCategory});
  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="px-3 text-lg">Categories</h4>
      <ul className="max-h-64 overflow-auto px-3 rounded border-b border-primary">
        {categories?.map((category) => (
          <li key={category.id} className="flex items-center pb-2 gap-2">
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
            {category.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 items-center">
        <label htmlFor="newCategory">New category</label>
        <input
          id="newCategory"
          type="text"
          className="p-1 bg-secondary border border-primary rounded"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <Button onClick={handleSubmit}>Add</Button>
      </div>
    </div>
  );
};

export default CategoryForm;
