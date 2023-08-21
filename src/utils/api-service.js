import fetcher from "./fetcher";

// FETCHER: fetcher(url, method = "GET", payload = null)

export function getAll() {
  return fetcher('/movies');
}

export function getOne(id) {
  return fetcher(`/movies/${id}`);
}

export function addToWatched(id) {
  return fetcher(`/movies/${id}/watched`, "POST");
}

export function addRule(id, rule) {
  return fetcher(`/movies/${id}/rules`, "POST", rule);
}

export function getRules(id) {
  return fetcher(`/movies/${id}/rules`);
}