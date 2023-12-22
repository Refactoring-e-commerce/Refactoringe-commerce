"use client";
import { redirect } from "next/navigation";
import User from "@/[auth]/components/User";

export default async function SignInPage() {
  return (
    <>
      
        <User />
    </>
  );
}
