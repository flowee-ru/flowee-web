import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { JwtClaims } from "./types";

export function getUsername() {
  const cookieStore = cookies();
  const access = cookieStore.get("access");

  if (!access) {
    return null;
  }

  return jwtDecode<JwtClaims>(access.value).username;
}

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const cookieStore = cookies();
  const access = cookieStore.get("access");

  if (!access) {
    return fetch(url, options);
  }

  const response = await fetch(url, options);

  if (response.status === 401) {
    const refresh = cookieStore.get("refresh");

    if (!refresh) {
      return response;
    }

    const refreshResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: refresh.value,
      }),
      cache: "no-store",
    });

    if (!refreshResponse.ok) {
      return response;
    }

    const { access: newAccess } = await refreshResponse.json();

    cookieStore.set("access", newAccess);

    return fetchWithAuth(url, options);
  }

  return response;
}
