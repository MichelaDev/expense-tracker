import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import ExpensesByCategory from "./ExpensesByCategory";
import ExpensesTrend from "./ExpenseTrends";
import TotalExpenses from "./TotalExpenses";
import Card from "./ui/Card";

const FakeDashboard = () => {
  const expenses = [
    {
      id: 1,
      date: "2023-01-01",
      category: "Groceries",
      description: "Weekly grocery shopping",
      amount: 120.45,
    },
    {
      id: 2,
      date: "2023-02-05",
      category: "Utilities",
      description: "Electricity bill",
      amount: 87.32,
    },
    {
      id: 3,
      date: "2023-03-10",
      category: "Entertainment",
      description: "Movie tickets",
      amount: 25.99,
    },
    {
      id: 4,
      date: "2023-03-15",
      category: "Transportation",
      description: "Gas for the car",
      amount: 42.67,
    },
    {
      id: 5,
      date: "2023-04-20",
      category: "Groceries",
      description: "Costco trip",
      amount: 189.78,
    },
    {
      id: 6,
      date: "2023-06-25",
      category: "Utilities",
      description: "Internet bill",
      amount: 65.99,
    },
  ];
  const totalExpenses = 532.2;
  const expensesByCategory: {
    [key: string]: { total: number; count: number };
  } = {};

  expenses.forEach((expense) => {
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

  expenses.forEach((expense) => {
    const month = new Date(expense.date).toLocaleString("default", {
      month: "numeric",
    });
    expensesTrend[month] += expense.amount;
  });

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 lg:min-h-[50vh]">
        <Card title="Total expenses">
          <TotalExpenses totalExpenses={totalExpenses} />
        </Card>
        <Card title="Expenses by category">
          <ExpensesByCategory expensesByCategory={expensesByCategory} />
        </Card>
        <Card title="Add expense">
          <AddExpense />
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 h-[60vh]">
        <Card title="Expense trend">
          <ExpensesTrend data={expensesTrend} />
        </Card>
        <Card title="Expense list">
          <ExpenseList data={expenses} />
        </Card>
      </div>
    </>
  );
};

export default FakeDashboard;
