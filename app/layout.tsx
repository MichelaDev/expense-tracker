import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense tracker App",
  description: "Easily manage your expenses and stay on top of your finances",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={`bg-secondary ${inter.className}`}>
        <NavBar user={data.user} />
        {children}
      </body>
    </html>
  );
}
