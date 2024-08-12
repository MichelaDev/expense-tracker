import { CategoryType, ExpenseType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import ExpenseForm from "../addExpense/ExpenseForm";
import { User } from "@supabase/supabase-js";

const UpdateExpense = ({
  selected,
  setSelected,
  categories,
  user
}: {
  selected: ExpenseType | undefined;
  setSelected: Dispatch<SetStateAction<ExpenseType | undefined>>;
  categories: CategoryType[];
  user: User | null,
}) => {
  return (
    <>
      <button
        onClick={() => setSelected(undefined)}
        className="ml-auto flex items-center justify-end gap-1 text-sm hover:text-tertiary"
      >
        Back to expense list
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
      <ExpenseForm
        type="update"
        categories={categories}
        expense={selected}
        callback={() => setSelected(undefined)}
        user={user}
      />
    </>
  );
};

export default UpdateExpense;
