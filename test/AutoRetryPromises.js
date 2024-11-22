// Function to fetch API
function fetchAPI() {}

function getUserData(retries, err) {
  if (!retries) {
    return Promise.reject(err);
  } else {
    fetchAPI().catch((err) => getUserData(retries - 1));
  }
}
