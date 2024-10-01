export const authenticate = (token: string) => {
  localStorage.setItem("access_token", token);
};
export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    return true;
  }
  return false;
};
export const logout = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    localStorage.removeItem("access_token");
  }
  return true;
};
