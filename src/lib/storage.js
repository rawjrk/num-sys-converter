export const load = (key) => JSON.parse(sessionStorage.getItem(key));
export const save = (key, val) =>
  sessionStorage.setItem(key, JSON.stringify(val));
