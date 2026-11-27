"use client";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import PeopleTable from "../../courses/[cid]/people/Table";
import * as client from "../client";
export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };
  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
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
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <button
        type="button"
        onClick={createUser}
        id="wd-add-people"
        className="float-end rounded bg-red-600 px-3 py-1.5 text-sm text-white"
      >
        <FaPlus className="me-2 inline" />
        Users
      </button>
      <h3>Users</h3>
      <input
        className="wd-filter-by-name me-2 mb-2 w-1/4 rounded border border-neutral-300 px-2 py-1"
        placeholder="Search people"
        value={name}
        onChange={(e) => filterUsersByName(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="wd-select-role mb-2 w-1/4 rounded border border-neutral-300 px-2 py-1"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
