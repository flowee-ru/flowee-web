import { notFound } from "next/navigation";
import { Eye } from "lucide-react";
import { User } from "@/lib/types";
import { LivePlayer } from "@/components/ui/live-player";
import moment from "moment";

export function generateMetadata({ params }: { params: { username: string } }) {
  return {
    title: params.username + " - Flowee",
    description: `@${params.username}'s profile page on Flowee!`,
  }
}

async function getUser(username: string) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL! + "/users/" + username, {
    cache: "no-store",
  });

  if (response.ok) {
    return response.json() as Promise<User>;
  } else {
    if (response.status == 404) {
      return notFound();
    } else {
      return null;
    }
  }
}

export default async function User({ params }: { params: { username: string } }) {
  const user = await getUser(params.username);

  if (!user) {
    return (
      <main className="grid justify-center py-5">
        <p>Failed to fetch user</p>
      </main>
    )
  }

  return (
    <main className="container flex flex-col xl:flex-row justify-center py-5 gap-3">
      <section className="grid gap-3">
        {user.live ? (
          <LivePlayer url={user.live.url} />
        ) : (
          <div className="grid justify-center items-center aspect-video bg-neutral-800 rounded">
            <p className="font-semibold">{user.username} is not live</p>
          </div>
        )}
        {user.live && (
          <div className="flex gap-3 items-center">
            {user.live_name && <h1 className="font-semibold text-xl">{user.live_name}</h1>}
            <div className="flex gap-3 items-center ms-auto text-sm text-neutral-400 font-medium">
              <span>{moment(user.live.ready_time).fromNow()}</span>
              <span className="flex gap-1 items-center">{user.live.viewers} <Eye /></span>
            </div>
          </div>
        )}
        <div className="grid rounded-lg bg-neutral-800 p-5">
          {user.display_name ? (
            <h1 className="font-semibold">{user.display_name} <span className="text-neutral-400">({user.username})</span></h1>
          ) : (
            <h1 className="font-semibold">{user.username}</h1>
          )}
          {user.bio && <p>{user.bio}</p>}
        </div>
      </section>
    </main>
  )
}
