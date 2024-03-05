"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return <Button type="submit" aria-disabled={pending}>Submit</Button>;
}
