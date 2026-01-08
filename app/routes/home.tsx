import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import { Await, useLoaderData } from "react-router";
import { Suspense } from "react";
import { UsersList, UsersSkeleton } from "~/components/Users";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

async function fetchUsers() {
  await new Promise((r) => setTimeout(r, 2000));

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (!res.ok) throw new Error("API failed");
  return res.json();
}

export async function loader() {
  return ({
    users: fetchUsers(),
  });
}
/* ---------------- Page ---------------- */
export default function HomePage() {
  const { users } = useLoaderData();

  return (
    <section>
      <h2>Users</h2>

      <Suspense fallback={<UsersSkeleton />}>
        <Await resolve={users}>
          {(data) => <UsersList users={data} />}
        </Await>
      </Suspense>
    </section>
  );
}