import fetcher from "./fetcher";

// FETCHER: fetcher(url, method = "GET", payload = null)

export function getAll() {
  return fetcher('/api/movies');
}

export function getOne(id) {
  return fetcher(`/api/movies/${id}`);
}

export function addToWatched(id) {
  return fetcher(`/api/movies/${id}/watched`, "POST");
}

export function addRule(id, rule) {
  return fetcher(`/api/movies/${id}/rules`, "POST", rule);
}

export function getRules(id) {
  return fetcher(`/api/movies/${id}/rules`);
}