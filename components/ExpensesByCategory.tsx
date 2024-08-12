import React from "react";

interface ExpensesByCategoryProps {
  expensesByCategory: {
    [key: string]: { total: number; count: number };
  };
}

const ExpensesByCategory = ({
  expensesByCategory,
}: ExpensesByCategoryProps) => {
  return (
    <ul className="grid gap-2">
      {Object.entries(expensesByCategory).map(
        ([category, { total, count }]) => (
          <li key={category} className="flex items-center justify-between">
            <div className="font-medium">{category}</div>
            <div className="text-muted-foreground">
              {total.toFixed(2)} € ({count} items)
            </div>
          </li>
        ),
      )}
    </ul>
  );
};

export default ExpensesByCategory;
