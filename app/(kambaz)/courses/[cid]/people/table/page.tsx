"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaTrash, FaUserCircle } from "react-icons/fa";
import * as client from "../client";
import * as coursesClient from "../../../client";
import {
  emptyUser,
  useAccountContext,
  type User,
} from "../../../../account/AccountContext";
export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const { currentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";
  const [users, setUsers] = useState<User[]>([]);
  const [person, setPerson] = useState<User>(emptyUser);
  useEffect(() => {
    const load = async () => {
      setUsers(await client.findUsersForCourse(courseId));
    };
    load();
  }, [courseId]);
  const addPerson = async () => {
    if (person.firstName.trim() === "" && person.lastName.trim() === "") return;
    const newUser = await client.createUser(person);
    await coursesClient.enrollIntoCourse(newUser._id, courseId);
    setUsers(await client.findUsersForCourse(courseId));
    setPerson(emptyUser);
  };
  const updateRole = async (user: User, role: string) => {
    const updated = { ...user, role };
    const saved = await client.updateUser(updated);
    setUsers(users.map((u) => (u._id === saved._id ? saved : u)));
  };
  const removePerson = async (userId: string) => {
    await client.deleteUser(userId);
    setUsers(users.filter((u) => u._id !== userId));
  };
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {isFaculty && (
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
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            {isFaculty && <th className="p-2" />}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">
                {isFaculty ? (
                  <select
                    className="wd-people-role-select rounded border border-neutral-300 px-2 py-1 text-sm"
                    value={user.role}
                    onChange={(e) => updateRole(user, e.target.value)}
                  >
                    <option value="STUDENT">Student</option>
                    <option value="TA">TA</option>
                    <option value="FACULTY">Faculty</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              {isFaculty && (
                <td className="p-2">
                  <FaTrash
                    className="wd-people-delete cursor-pointer text-red-600"
                    onClick={() => removePerson(user._id)}
                    title="Delete person"
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
