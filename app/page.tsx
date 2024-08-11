import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/LandingPage";
import UserContextProvider from "@/components/UserContext";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getUser();

  return (
    <UserContextProvider data={data.user}>
      <main className="flex flex-col gap-6 p-6 w-screen">
        {data.user ? <Dashboard /> : <LandingPage />}
      </main>
    </UserContextProvider>
  );
}
