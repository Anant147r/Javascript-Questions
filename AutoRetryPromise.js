const fetchUserData = () => {
  // GET API to fetch user data
  return new Promise((res, rej) => {
    fetch("asdfasdf").then();
  });
};

const getUserData = (retries, err) => {
  if (!retries) return new Promise.reject(err);
  fetchUserData().catch((err) => {
    return getUserData(retries - 1, err);
  });
};
