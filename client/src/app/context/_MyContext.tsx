"use client"

import { createContext, useContext, useState } from "react";

type ContextProvider = {
  children: React.ReactNode;
};
export type MyContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};
export const MyContext = createContext<MyContextType | null>(null);

export default function ContextProvider({ children }: ContextProvider) {
  const [user, setUser] = useState<string>("test");
  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
}

export function LoginContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error(" Error: Context provider");
  }
  return context;
}
