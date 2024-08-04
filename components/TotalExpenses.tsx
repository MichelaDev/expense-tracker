import React from "react";

const TotalExpenses = ({ totalExpenses }: { totalExpenses: number }) => {
  return <div className="text-4xl font-bold">{totalExpenses.toFixed(2)} €</div>;
};

export default TotalExpenses;
