import { User } from "@supabase/supabase-js";
import AccountButton from "./ui/AccountButton";

const NavBar = ({ user }: { user: User | null }) => {
  return (
    <header className="flex justify-between bg-primary px-6 py-4 text-secondary">
      <h1 className="text-2xl font-bold">Expense Tracker</h1>
      {user && <AccountButton />}
    </header>
  );
};

export default NavBar;
