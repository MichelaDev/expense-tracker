import Card from "./ui/Card";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 h-[50vh]">
        <Card title="Total expenses" />
        <Card title="Expenses by category" />
        <Card title="Expense trend" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 h-[60vh]">
        <Card title="Add expense" />
        <Card title="Expense list" />
      </div>
    </>
  );
};

export default Dashboard;
