import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import Button from "../ui/Button";
import { User } from "@supabase/supabase-js";
import { formatDate } from "@/utils/utils";
import { CategoryType, ExpenseType } from "@/types";
import { FormState, insertNewExpense } from "./actions";
import { useFormState } from "react-dom";

const initialState: FormState = {
  message: {},
};

const ExpenseForm = ({ user, categories }: { user: User | null, categories: CategoryType[] }) => {
  const router = useRouter();

  const ref: React.MutableRefObject<HTMLFormElement | null> = useRef(null);

  const [state, formAction] = useFormState(insertNewExpense, initialState);

  const handleSubmit = (formData: FormData) => {
    if (!user) {
      router.push("/login");
      return
    }

    formAction(formData)
  };

  if(state.success) {
    ref.current?.reset()
  }

  return (
    <form ref={ref} action={(formData) => handleSubmit(formData)}>
      <div className="grid gap-2 mb-3">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          className="p-2 bg-secondary border border-primary rounded"
          defaultValue={formatDate(new Date(), "yyyy-MM-DD")}
        />
        {state.message.date && <p className="text-red-600 text-sm">{state.message.date}</p>}
      </div>
      <div className="grid gap-2 mb-3">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          className="p-2 bg-secondary border border-primary rounded"
          defaultValue={"Select a category"}
        >
          <option key={"placeholder"} value={""}>Select a category</option>
          {categories.map((category) => <option key={category.id} value={category.name}>{category.name}</option>)}
        </select>
        {state.message.category && <p className="text-red-600 text-sm">{state.message.category}</p>}
      </div>
      <div className="grid gap-2 mb-3">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          className="p-2 bg-secondary border border-primary rounded"
        />
      </div>
      <div className="grid gap-2 mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          className="p-2 bg-secondary border border-primary rounded"
        />
        {state.message.amount && <p className="text-red-600 text-sm">{state.message.amount}</p>}
      </div>
      <Button full attributes={{type: "submit"}}>
        Add Expense
      </Button>
      <p className="text-red-600 text-sm">{state.error}</p>
    </form>
  );
};

export default ExpenseForm;
