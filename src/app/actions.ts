"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp(prevState: any, formData: FormData) {
  const body = {
    username: formData.get("username")!,
    password: formData.get("password")!,
    captcha: formData.get("h-captcha-response")!,
  };

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL! + "/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    return {
      username: errorResponse.username as string[] | undefined,
      password: errorResponse.password as string[] | undefined,
      captcha: errorResponse.captcha as string[] | undefined,
      detail: errorResponse.detail as string | undefined,
    };
  }

  const user = await response.json();

  const cookieStore = cookies();
  cookieStore.set('access', user.tokens.access);
  cookieStore.set('refresh', user.tokens.refresh);

  return redirect(`/${user.username}`);
}

export async function signIn(prevState: any, formData: FormData) {
  const body = {
    username: formData.get("username")!,
    password: formData.get("password")!,
  };

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL! + "/auth/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    return {
      username: errorResponse.username as string[] | undefined,
      password: errorResponse.password as string[] | undefined,
      detail: errorResponse.detail as string | undefined,
    };
  }

  const user = await response.json();

  const cookieStore = cookies();
  cookieStore.set('access', user.access);
  cookieStore.set('refresh', user.refresh);

  return redirect(`/${body.username}`);
}
