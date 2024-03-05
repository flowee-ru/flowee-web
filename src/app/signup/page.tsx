import { Metadata } from "next";
import Link from "next/link";
import { SignUpForm } from "@/components/forms/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up - Flowee",
  description: "Welcome to Flowee!",
}

export default function SignUp() {
  return (
    <main className="grid justify-center text-center py-10 gap-5">
      <h1 className="text-3xl font-bold">Welcome to Flowee!</h1>
      <SignUpForm />
      <div className="grid gap-3">
        <p>Already have an account? <Link href="/signin" className="underline">Sign In</Link></p>
        <p>Made with ❤️ by <b>Mister Kirill</b></p>
      </div>
    </main>
  );
}

