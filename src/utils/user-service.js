import fetcher from "./fetcher";

export function login(credentials) {
  return fetcher('/api/auth/google', 'POST', credentials)
}

export function getUser() {
  return fetcher('/api/auth/user')
}
