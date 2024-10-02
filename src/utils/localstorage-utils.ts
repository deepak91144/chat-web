export const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) return accessToken;
  return false;
};
