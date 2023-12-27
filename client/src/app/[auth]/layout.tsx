import User from "@/[auth]/components/User";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Authentication",
};
export default async function SignInPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
console.log(token);

  // if (token) redirect("/");

  return <User />;
}
