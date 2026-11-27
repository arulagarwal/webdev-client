import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const LAB6_API = `${HTTP_SERVER}/api/lab6`;
export const fetchStatus = async () => {
  const response = await axios.get(`${LAB6_API}/status`);
  return response.data;
};
export type Todo = { _id: string; title: string; completed: boolean };
const TODOS_API = `${LAB6_API}/todos`;
export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(TODOS_API);
  return response.data;
};
export const fetchCompletedTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(`${TODOS_API}?completed=true`);
  return response.data;
};
export const fetchTodoById = async (id: string): Promise<Todo> => {
  const response = await axios.get(`${TODOS_API}/${id}`);
  return response.data;
};
export const createTodo = async (title: string): Promise<Todo> => {
  const response = await axios.post(TODOS_API, { title });
  return response.data;
};
export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const response = await axios.put(`${TODOS_API}/${todo._id}`, todo);
  return response.data;
};
export const deleteTodo = async (todo: Todo) => {
  const response = await axios.delete(`${TODOS_API}/${todo._id}`);
  return response.data;
};
