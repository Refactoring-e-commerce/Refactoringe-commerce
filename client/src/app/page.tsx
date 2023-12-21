import { GoogleSignInButton } from "@/components/authButtons";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SignInPage() {
  const session = await getServerSession(authConfig);

  console.log("Session: ", session);

  if (session) return redirect("/timeline");

  return (
    <div className=" flex items-center justify-center gap-4">

      <img
        src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1704067200&Signature=GQa8O2SkX8UDFbeizgBrwLxXL1anAfaFNEKo5HncLzhxX7OJjHOfjJJeIQgGJmQtfdZET09-mKGRmiH41a2LvNw-eQQYxEC-L~qcGiBZUmlyai6PdkQoJbw2Nlh2xUxP0ZXetPHP7I95450Vo2~BTg0jGhGtL3PrdUgkGbzrPwAEbCcECmeR9TiBWet6rquhgxNT4ZL85GJALF3HnAat94bSpLeyAj-fCuRCLXiYPqWQV4o-U4gfpvcGPM3yoB4eaBjh5MrvGYBW9IxwVBm2-M-R8YBIXPjJXZJB9tVh9it~LK7Ij0DNRruxHRDzu6TbweCNgbz0bjZ8h8sC6fsZpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />

    
    </div>
  );
}
