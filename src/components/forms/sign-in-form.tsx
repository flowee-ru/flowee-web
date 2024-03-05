"use client";

import { Input } from "../ui/input";
import { useFormState } from "react-dom";
import { signIn } from "@/app/actions";
import { SubmitButton } from "../ui/submit-button";

export function SignInForm() {
  const [state, formAction] = useFormState(signIn, undefined);

  return (
    <form action={formAction} className="grid gap-4 w-96">
      <div className="grid gap-2 text-start">
        <label htmlFor="username-input" className="font-medium">Username</label>
        <Input
          type="text"
          placeholder="my_cool_username"
          id="username-input"
          name="username"
        />
        {state?.username?.map((errorMessage, index) => (
          <p key={index} className="text-red-400">{errorMessage}</p>
        ))}
      </div>
      <div className="grid gap-2 text-start">
        <label htmlFor="password-input" className="font-medium">Password</label>
        <Input
          type="password"
          placeholder="my_pa$$word"
          id="password-input"
          name="password"
        />
        {state?.password?.map((errorMessage, index) => (
          <p key={index} className="text-red-400">{errorMessage}</p>
        ))}
      </div>
      {state?.detail && <p className="text-red-400">{state.detail}</p>}
      <SubmitButton />
    </form>
  )
}
