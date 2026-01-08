import type { Route } from "./+types/_index";
import { Link } from "react-router";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


/* ---------------- Page ---------------- */
export default function HomePage() {

  return (
    <section>
      <h2>Users</h2>
      <Link to="/userlist" className="underline">User List</Link>
    </section>
  );
}