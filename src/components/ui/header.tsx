import Link from "next/link";
import Image from "next/image";
import { getUsername } from "@/lib/auth";
import { Button, GhostButton } from "./button";

export function Header() {
  const username = getUsername();
  
  return (
    <header>
      <div className="container flex items-center justify-between py-3">
        <Link href="/">
          <Image src="/logo.svg" alt="Flowee Logo" width={50} height={50} />
        </Link>
        {username ? (
          <Link href={`/u/${username}`}>
            <Button>{username}</Button>
          </Link>
        ) : (
          <div className="space-x-3">
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
            <Link href="/signin">
              <GhostButton>Sign In</GhostButton>
            </Link>
          </div>
        )}
      </div>
      <hr className="border-neutral-700" />
    </header>
  );
}
