async function runTasksInSeries(tasks) {
  for (let task of tasks) await task();
}

function asyncTask1() {
  return new Promise((resolve, rejet) => {
    setTimeout(() => {
      console.log("Function 1 resolved");
      //   resolve();
      resolve();
    }, 4000);
  });
}

function asyncTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 2 resolved");
      resolve();
    }, 6000);
  });
}

runTasksInSeries([asyncTask1, asyncTask2])
  .then(() => {
    console.log("All tasks Completed");
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(runTasksInSeries([asyncTask2, asyncTask1]));

// async function runTasksInSeries(tasks) {
//   for (let task of tasks) {
//     await task();
//   }
// }

// Example asynchronous tasks
// function asyncTask1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Async task 1 completed");
//       resolve();
//     }, 1000);
//   });
// }

// function asyncTask2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Async task 2 completed");
//       resolve();
//     }, 2000);
//   });
// }

// function asyncTask3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Async task 3 completed");
//       resolve();
//     }, 1500);
//   });
// }

// // Define your tasks in an array
// const tasks = [asyncTask1, asyncTask2, asyncTask3];

// // Run the tasks in series
// runTasksInSeries(tasks)
//   .then(() => {
//     console.log("All tasks completed");
//   })
//   .catch((error) => {
//     console.error("Error occurred:", error);
//   });
