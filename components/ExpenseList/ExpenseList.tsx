"use client"

import { CategoryType, ExpenseType } from "@/types";
import { useContext, useState } from "react";
import ExpenseTable from "./ExpenseTable";
import UpdateExpense from "./UpdateExpense";
import { UserContext } from "../UserContext";

const ExpenseList = ({ data, categories }: { data: ExpenseType[], categories: CategoryType[] }) => {
  const user = useContext(UserContext);
  const [selected, setSelected] = useState<ExpenseType>();

  return (
    <div className="h-min-80 w-full overflow-auto rounded text-sm lg:text-base">
      {selected ? (
        <UpdateExpense selected={selected} setSelected={setSelected} categories={categories} user={user}  />
      ) : (
        <ExpenseTable data={data} setSelected={setSelected} user={user} />
      )}
    </div>
  );
};

export default ExpenseList;
