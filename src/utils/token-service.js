import fetcher from './fetcher';


export function getToken(token = null) {
  token = token || localStorage.getItem('token')
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function setToken(token) {
  token ? localStorage.setItem('token', token) : localStorage.removeItem('token');
}