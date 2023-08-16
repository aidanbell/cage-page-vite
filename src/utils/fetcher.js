import { getToken } from "./token-service";

const BASE_URL =
  "http://cage-page-backend.eba-vnkpz5mk.ca-central-1.elasticbeanstalk.com";

export default async function fetcher(url, method = "GET", payload = null) {
  const options = { method, headers: {} };
  if (payload) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(`${BASE_URL}${url}`, options);
  console.log(res)
  if (res.ok) return res.json();
  throw new Error(`Bad Req: ${res.status} - ${res.statusText}`);
}
