"use client";

import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Input } from "../ui/input";
import { useFormState } from "react-dom";
import { signUp } from "@/app/actions";
import { SubmitButton } from "../ui/submit-button";

export function SignUpForm() {
  const [state, formAction] = useFormState(signUp, undefined);

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
      <div className="grid gap-2 text-start">
        <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
          theme="dark"
        />
        {state?.captcha?.map((errorMessage, index) => (
          <p key={index} className="text-red-400">{errorMessage}</p>
        ))}
      </div>
      <SubmitButton />
    </form>
  )
}
