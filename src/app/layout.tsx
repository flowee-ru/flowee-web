import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Button, GhostButton } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flowee",
  description: "Welcome to the Flowee!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-900 text-white ${inter.className}`}>
        <header>
          <div className="flex items-center justify-between px-10 py-3">
            <Link href="/">
              <Image src="/logo.svg" alt="Flowee Logo" width={50} height={50} />
            </Link>
            <div className="space-x-3">
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
              <Link href="/signin">
                <GhostButton>Sign In</GhostButton>
              </Link>
            </div>
          </div>
          <hr className="border-neutral-700" />
        </header>
        {children}
      </body>
    </html>
  );
}