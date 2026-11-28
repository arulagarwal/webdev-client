"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import * as client from "../../../client";
import * as accountClient from "../../../../account/client";
import PeopleTable from "../Table";
import {
  emptyUser,
  useAccountContext,
  type User,
} from "../../../../account/AccountContext";
export default function People() {
  const { cid } = useParams<{ cid: string }>();
  const { currentUser } = useAccountContext();
  const canAddPeople =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";
  const [users, setUsers] = useState<User[]>([]);
  const [person, setPerson] = useState<User>(emptyUser);
  const fetchUsers = async () => {
    setUsers(await client.findUsersForCourse(cid));
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);
  const addPerson = async () => {
    if (person.firstName.trim() === "" && person.lastName.trim() === "") return;
    const newUser = await accountClient.createUser({
      ...person,
      username: `newuser${Date.now()}`,
      password: "password123",
    });
    await client.enrollIntoCourse(newUser._id, cid);
    await fetchUsers();
    setPerson(emptyUser);
  };
  return (
    <div>
      {canAddPeople && (
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <input
            id="wd-people-first-name"
            placeholder="First name"
            className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
            value={person.firstName}
            onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
          />
          <input
            id="wd-people-last-name"
            placeholder="Last name"
            className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
            value={person.lastName}
            onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
          />
          <select
            id="wd-people-role"
            className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
            value={person.role}
            onChange={(e) => setPerson({ ...person, role: e.target.value })}
          >
            <option value="STUDENT">Student</option>
            <option value="TA">TA</option>
            <option value="FACULTY">Faculty</option>
          </select>
          <button
            type="button"
            id="wd-people-add-click"
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={addPerson}
          >
            + People
          </button>
        </div>
      )}
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
