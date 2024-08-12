import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import Button from "../ui/Button";
import { User } from "@supabase/supabase-js";
import { formatDate } from "@/utils/utils";
import { CategoryType, ExpenseType } from "@/types";
import { FormState, insertNewExpense } from "../actions/insert";
import { useFormState } from "react-dom";
import { updateExpense } from "../actions/update";

const initialState: FormState = {
  message: {},
};

const ExpenseForm = ({
  user,
  categories,
  type,
  expense,
  callback
}: {
  user: User | null,
  categories: CategoryType[],
  type: "insert" | "update",
  expense?: ExpenseType,
  callback?: () => void
}) => {
  const router = useRouter();

  const ref: React.MutableRefObject<HTMLFormElement | null> = useRef(null);

  const [state, formAction] = useFormState(type === "insert" ? insertNewExpense : updateExpense, initialState);

  const handleSubmit = (formData: FormData) => {
    if (!user) {
      router.push("/login");
      return;
    }

    formAction(formData);
  };

  if (state.success) {
    ref.current?.reset();
    callback?.()
  }

  return (
    <form ref={ref} action={(formData) => handleSubmit(formData)}>
      <div className="mb-3 grid gap-2">
        {expense && <input type="hidden" id="id" name="id" value={expense.id} />}
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          className="rounded border border-primary bg-secondary p-2"
          defaultValue={expense?.date ? formatDate(expense.date, "yyyy-MM-DD") : formatDate(new Date(), "yyyy-MM-DD")}
        />
        {state.message.date && (
          <p className="text-sm text-red-600">{state.message.date}</p>
        )}
      </div>
      <div className="mb-3 grid gap-2">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          className="rounded border border-primary bg-secondary p-2"
          defaultValue={expense?.category || "Select a category"}
        >
          <option key={"placeholder"} value={""}>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        {state.message.category && (
          <p className="text-sm text-red-600">{state.message.category}</p>
        )}
      </div>
      <div className="mb-3 grid gap-2">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          className="rounded border border-primary bg-secondary p-2"
          defaultValue={expense?.description || ""}
        />
      </div>
      <div className="mb-3 grid gap-2">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          className="rounded border border-primary bg-secondary p-2"
          defaultValue={expense?.amount || ""}
        />
        {state.message.amount && (
          <p className="text-sm text-red-600">{state.message.amount}</p>
        )}
      </div>
      <Button full attributes={{ type: "submit" }}>
        {type === "insert" ? "Add expense" : "Update expense"}
      </Button>
      <p className="text-sm text-red-600">{state.error}</p>
    </form>
  );
};

export default ExpenseForm;
