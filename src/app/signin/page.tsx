import { Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "@/components/forms/sign-in-form";

export const metadata: Metadata = {
  title: "Sign In - Flowee",
  description: "Welcome back to Flowee!",
}

export default function SignIn() {
  return (
    <main className="grid justify-center text-center py-10 gap-5">
      <h1 className="text-3xl font-bold">Welcome back to Flowee!</h1>
      <SignInForm />
      <div className="grid gap-3">
        <p>Don&apos;t have an account? <Link href="/signup" className="underline">Sign Up</Link></p>
        <p>Made with ❤️ by <b>Mister Kirill</b></p>
      </div>
    </main>
  );
}

