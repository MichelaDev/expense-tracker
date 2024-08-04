"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AccountButton = () => {

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const logout = async () => {
    const supabaseClient = createClient();
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
      router.refresh();
    }
  };
  return (
    <div className="relative w-fit h-fit">
      <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary hover:text-primary h-10 w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span className="sr-only">Account</span>
      </button>
      {isOpen && <div className="bg-tertiary absolute top-full right-0 rounded py-2 px-6">
        <button onClick={logout} className="hover:text-primary">
          Logout
        </button>
      </div>}
    </div>
  );
};

export default AccountButton;
