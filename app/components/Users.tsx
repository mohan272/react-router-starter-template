import type { Key } from "react";

export function UsersList({ users }: any) {
  return (
    <div className="flex gap-2 flex-wrap">
      {users.map((u: { id: Key; name: string; email: string }) => (
        <div className="my-4">
          <UserCard user={u} />
        </div>
      ))}
    </div>
  );
}


function UserCard({ user }: any) {
  return (
    <div className="w-full max-w-md bg-white rounded-xl p-6 shadow">
      <h2 className="text-xl font-semibold text-gray-900">
        {user.name}
      </h2>
      <p className="text-sm text-gray-500">@{user.username}</p>

      <div className="mt-4 space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium">Email:</span>{" "}
          {user.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span>{" "}
          {user.phone}
        </p>
        <p>
          <span className="font-medium">Website:</span>{" "}
          {user.website}
        </p>
      </div>

      <div className="mt-5 border-t pt-4">
        <p className="text-sm font-medium text-gray-900">
          Address
        </p>
        <p className="text-sm text-gray-600">
          {user.address.street}, {user.address.suite}
        </p>
        <p className="text-sm text-gray-600">
          {user.address.city} – {user.address.zipcode}
        </p>
      </div>

      <div className="mt-5 border-t pt-4">
        <p className="text-sm font-medium text-gray-900">
          Company
        </p>
        <p className="text-sm text-gray-600">
          {user.company.name}
        </p>
        <p className="text-xs text-gray-500 italic">
          “{user.company.catchPhrase}”
        </p>
      </div>
    </div>
  );
}

export function UsersSkeleton() {
  return (
    <div className="flex gap-2 flex-wrap">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="w-full max-w-md bg-white rounded-xl p-6 shadow my-2">
          <div className="h-6 w-2/3 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-3 bg-gray-200 rounded animate-pulse" />
            <div className="h-3 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
