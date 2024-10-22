const fetchUserData = () => {
  // GET API to fetch user data
};

const getUserData = (retries, err) => {
  if (!retries) return new Promise.reject(err);
  fetchUserData().catch((err) => {
    return getUserData(retries - 1, err);
  });
};
