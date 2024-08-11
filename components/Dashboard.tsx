import { supabaseClient } from "@/utils/supabase/server";
import Card from "./ui/Card";
import TotalExpenses from "./TotalExpenses";
import ExpensesByCategory from "./ExpensesByCategory";
import AddExpense from "./addExpense/AddExpense";
import ExpensesTrend from "./ExpenseTrends";
import ExpenseList from "./ExpenseList";

const Dashboard = async () => {

  const { data, error } = await supabaseClient
  .from('expenses')
  .select()

  console.log(data)

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 lg:min-h-[50vh]">
        <Card title="Total expenses">
          {/* <TotalExpenses totalExpenses={totalExpenses} /> */}
        </Card>
        <Card title="Expenses by category">
          {/* <ExpensesByCategory expensesByCategory={expensesByCategory} /> */}
        </Card>
        <Card title="Add expense">
          <AddExpense />
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 h-[60vh]">
        <Card title="Expense trend">
          {/* <ExpensesTrend data={expensesTrend} /> */}
        </Card>
        <Card title="Expense list">
          {/* <ExpenseList data={expenses} /> */}
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
