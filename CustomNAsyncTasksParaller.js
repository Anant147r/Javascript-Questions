function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 5) {
        reject(`Error ${value}`);
      } else {
        resolve(value * 1000);
      }
    }, value * 1000);
  });
}

function asyncParallel(tasks, callback) {
  // store the result
  const results = [];

  const errors = [];

  // track the task executed
  let tasksCompleted = 0;

  // run each task
  tasks.forEach((asyncTask) => {
    // invoke the async task
    // it can be a promise as well
    // for a promise you can chain it with then
    asyncTask
      .then((value) => {
        // store the output of the task
        results.push(value);
      })
      .catch((error) => {
        errors.push(error);
      })
      .finally(() => {
        // increment the tracker
        tasksCompleted++;

        // if all tasks are executed
        // invoke the callback
        if (tasksCompleted >= tasks.length) {
          callback(errors, results);
        }
      });
  });
}

const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

asyncParallel(taskList, (error, result) => {
  console.log("errors", error);
  console.log("results", result);
});

//errors (4) ["Error 0", "Error 1", "Error 1", "Error 2"]
//results (2) [5000, 9000]
