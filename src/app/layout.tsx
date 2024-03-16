import "./globals.css";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/ui/header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
