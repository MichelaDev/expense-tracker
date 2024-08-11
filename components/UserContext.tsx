"use client"

import { User } from "@supabase/supabase-js";
import React, { createContext } from "react";

export const UserContext = createContext<User | null>(null);

const UserContextProvider = ({children, data}: {children: React.ReactNode, data: User | null}) => {
  
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
};

export default UserContextProvider;