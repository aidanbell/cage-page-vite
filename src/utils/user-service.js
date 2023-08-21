import fetcher from "./fetcher";

export function login(credentials) {
  return fetcher('/auth/google', 'POST', credentials)
}

export function getUser() {
  return fetcher('/auth/user')
}
