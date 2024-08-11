import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../ui/Button";
import { User } from "@supabase/supabase-js";
import { formatDate } from "@/utils/utils";
import { CategoryType } from "@/types";

const ExpenseForm = ({ user, categories }: { user: User | null, categories: CategoryType[] }) => {
  const router = useRouter();

  const [newExpense, setNewExpense] = useState({
    date: formatDate(new Date(), "yyyy-MM-DD"),
    category: "",
    description: "",
    amount: "",
  });

  const handleSubmit = () => {
    if (!user) {
      router.push("/login");
      return
    }
    
  };

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
          {categories.map((category) => <option key={category.id} value={category.name}>{category.name}</option>)}
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
      <Button full onClick={handleSubmit}>
        Add Expense
      </Button>
    </>
  );
};

export default ExpenseForm;
