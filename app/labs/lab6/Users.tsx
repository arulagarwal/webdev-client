"use client";
import { useEffect, useState } from "react";
import * as client from "@/app/(kambaz)/account/client";
import PeopleDetails from "@/app/(kambaz)/courses/[cid]/people/Details";
type LabUser = {
  _id: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  email?: string;
};
export default function Users() {
  const [users, setUsers] = useState<LabUser[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [showUserId, setShowUserId] = useState<string | null>(null);
  const fetchUsers = async () => {
    setUsers(await client.findAllUsers());
  };
  useEffect(() => {
    client.findAllUsers().then(setUsers);
  }, []);
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    setName("");
    setUsers(role ? await client.findUsersByRole(role) : await client.findAllUsers());
  };
  const filterUsersByName = async (name: string) => {
    setName(name);
    setRole("");
    setUsers(name ? await client.findUsersByPartialName(name) : await client.findAllUsers());
  };
  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User ${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };
  return (
    <div id="wd-lab6-users">
      <h3>Users</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <button
          type="button"
          id="wd-add-people"
          className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
          onClick={createUser}
        >
          + Users
        </button>
        <input
          className="wd-filter-by-name rounded border border-neutral-300 px-2 py-1"
          placeholder="Search people"
          value={name}
          onChange={(e) => filterUsersByName(e.target.value)}
        />
        <select
          className="wd-select-role rounded border border-neutral-300 px-2 py-1"
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-300">
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="odd:bg-neutral-50">
                <td className="p-2">
                  <button
                    type="button"
                    className="text-red-700 underline"
                    onClick={() => setShowUserId(user._id)}
                  >
                    {user.firstName} {user.lastName}
                  </button>
                </td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showUserId && (
        <PeopleDetails
          uid={showUserId}
          onClose={() => {
            setShowUserId(null);
            fetchUsers();
          }}
        />
      )}
      <hr />
    </div>
  );
}
