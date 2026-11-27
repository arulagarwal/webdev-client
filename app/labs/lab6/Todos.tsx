"use client";
import { useState } from "react";
import * as client from "./client";
import type { Todo } from "./client";
export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("Learn Mongoose");
  const [message, setMessage] = useState("");
  const count = (n: number, label: string) =>
    `${n} ${label}${n === 1 ? "" : "s"}`;
  const run = async (action: () => Promise<void>) => {
    try {
      await action();
    } catch {
      setMessage("Could not reach the server.");
    }
  };
  const findAll = () =>
    run(async () => {
      const all = await client.fetchTodos();
      setTodos(all);
      setMessage(`Found ${count(all.length, "todo")}.`);
    });
  const findCompleted = () =>
    run(async () => {
      const completed = await client.fetchCompletedTodos();
      setTodos(completed);
      setMessage(`Found ${count(completed.length, "completed todo")}.`);
    });
  const create = () =>
    run(async () => {
      const todo = await client.createTodo(title);
      setTodos([...todos, todo]);
      setMessage(`Created "${todo.title}".`);
    });
  const findById = (todo: Todo) =>
    run(async () => {
      const found = await client.fetchTodoById(todo._id);
      setMessage(
        `By id ${found._id}: "${found.title}" is ${found.completed ? "completed" : "not completed"}.`,
      );
    });
  const toggle = (todo: Todo) =>
    run(async () => {
      const updated = await client.updateTodo({ ...todo, completed: !todo.completed });
      setTodos(todos.map((t) => (t._id === updated._id ? updated : t)));
      setMessage(`Marked "${updated.title}" ${updated.completed ? "complete" : "not complete"}.`);
    });
  const remove = (todo: Todo) =>
    run(async () => {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t._id !== todo._id));
      setMessage(`Deleted "${todo.title}".`);
    });
  return (
    <div id="wd-lab6-todos">
      <h3>Lab 6 todos (Mongoose CRUD)</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <button
          type="button"
          id="wd-lab6-fetch-todos"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={findAll}
        >
          Find all
        </button>
        <button
          type="button"
          id="wd-lab6-fetch-completed"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={findCompleted}
        >
          Find completed
        </button>
        <button
          type="button"
          id="wd-lab6-create-todo"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
          onClick={create}
        >
          Create
        </button>
      </div>
      <input
        id="wd-lab6-todo-title"
        className="mb-2 rounded border border-neutral-300 px-2 py-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p id="wd-lab6-todo-message" className="text-sm text-neutral-600">
        {message}
      </p>
      <ul className="m-0 list-none p-0">
        {todos.map((todo) => (
          <li key={todo._id} className="mb-1 flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggle(todo)}
            />
            <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            <button
              type="button"
              className="rounded bg-neutral-200 px-2 py-0.5 text-sm"
              onClick={() => findById(todo)}
            >
              By id
            </button>
            <button
              type="button"
              className="rounded bg-red-600 px-2 py-0.5 text-sm text-white"
              onClick={() => remove(todo)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
