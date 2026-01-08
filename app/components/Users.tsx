import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export function UsersList({ users }: any) {
    return (
        <ul>
            {users.map((u: { id: Key; name: string; email: string }) => (
                <li key={u.id}>
                    {u.name} — {u.email}
                </li>
            ))}
        </ul>
    );
}

export function UsersSkeleton() {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 18,
            marginBottom: 10,
            borderRadius: 6,
            background:
              "linear-gradient(90deg,#eee 25%,#ddd 37%,#eee 63%)",
            backgroundSize: "400% 100%",
            animation: "shimmer 1.4s infinite",
          }}
        />
      ))}

      <style>{`
        @keyframes shimmer {
          0% { background-position: 100% }
          100% { background-position: 0 }
        }
      `}</style>
    </div>
  );
}
