import Card from "./ui/Card";
import TotalExpenses from "./TotalExpenses";
import ExpensesByCategory from "./ExpensesByCategory";
import AddExpense from "./addExpense/AddExpense";
import ExpensesTrend from "./ExpenseTrends";
import ExpenseList from "./ExpenseList/ExpenseList";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const Dashboard = async () => {
  const supabaseClient = createClient(cookies());

  const { data, error } = await supabaseClient.from("expenses").select();

  const { data: dataCat } = await supabaseClient.from("categories").select();

  const totalExpenses = data?.reduce((acc, expense) => acc + expense.amount, 0);

  const expensesByCategory: {
    [key: string]: { total: number; count: number };
  } = {};

  data?.forEach((expense) => {
    if (!expensesByCategory[expense.category]) {
      expensesByCategory[expense.category] = { total: 0, count: 0 };
    }
    expensesByCategory[expense.category].total += expense.amount;
    expensesByCategory[expense.category].count += 1;
  });

  const expensesTrend: { [key: string]: number } = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0,
  };

  data?.forEach((expense) => {
    const month = new Date(expense.date).toLocaleString("default", {
      month: "numeric",
    });
    expensesTrend[month] += expense.amount;
  });

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 lg:min-h-[50vh] lg:grid-cols-3">
        <Card title="Total expenses">
          <TotalExpenses totalExpenses={totalExpenses} />
        </Card>
        <Card title="Expenses by category">
          <ExpensesByCategory expensesByCategory={expensesByCategory} />
        </Card>
        <Card title="Add expense">
          <AddExpense categories={dataCat || []} />
        </Card>
      </div>
      <div className="grid h-[60vh] w-full grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Expense trend">
          <ExpensesTrend data={expensesTrend} />
        </Card>
        <Card title="Expense list">
          <ExpenseList data={data || []} categories={dataCat || []} />
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
