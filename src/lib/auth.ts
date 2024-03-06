import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

interface JwtClaims {
  username: string;
}

export function getUsername() {
  const cookieStore = cookies();
  const access = cookieStore.get("access");

  if (!access) {
    return null;
  }

  return jwtDecode<JwtClaims>(access.value).username;
}
