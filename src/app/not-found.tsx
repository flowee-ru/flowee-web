import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid justify-center text-center py-10 gap-5">
      <h1 className="text-3xl font-semibold">404</h1>
      <p>Page not found</p>
      <Link href="/">
        <Button>Go home</Button>
      </Link>
    </main>
  )
}
