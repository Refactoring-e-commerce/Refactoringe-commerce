import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
const inter = Inter({ subsets: ["latin"] });
import Load from "./Components/Load";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "flex"}>
        <Suspense fallback={<Load />}>
          <Navbar />
          <NextAuthProvider>{children}</NextAuthProvider>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
