import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const LAB6_API = `${HTTP_SERVER}/api/lab6`;
export const fetchStatus = async () => {
  const response = await axios.get(`${LAB6_API}/status`);
  return response.data;
};
