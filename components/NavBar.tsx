import { User } from "@supabase/supabase-js";
import AccountButton from "./ui/AccountButton";

const NavBar = ({user}: {user: User | null}) => {
  return (
    <header className="bg-primary text-secondary py-4 px-6 flex justify-between">
      <h1 className="text-2xl font-bold">Expense Tracker</h1>
      {user && <AccountButton />}
    </header>
  );
};

export default NavBar;
