import User from "@/[auth]/components/User";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const metadata = {
  title: "User Data",
};
export default async function SignInPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  console.log(token?.value);

  // if (token) redirect("/");

  return <User />;
}
