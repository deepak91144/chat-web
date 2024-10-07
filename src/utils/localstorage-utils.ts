export const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  console.log("accessToken_", accessToken);

  if (accessToken) return accessToken;
  return false;
};

export const storeUserId = (userId: string) => {
  localStorage.setItem("userId", userId);
};
export const getUserId = () => {
  const userId = localStorage.getItem("userId");

  if (userId) return userId;
  return false;
};
export const removeUserId = () => {
  localStorage.removeItem("userId");
};
