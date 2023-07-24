export function watched(watched, id) {
  return watched.some((w) => w.movieId === id);
}
