async function runTasksInSeries(tasks) {
  for (let task of tasks) await task();
}

function asyncTask1() {
  return new Promise((resolve, rejet) => {
    setTimeout(() => {
      console.log("Function 1 resolved");
      //   resolve();
      resolve();
    }, 1000);
  });
}

function asyncTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 2 resolved");
      resolve();
    }, 1000);
  });
}

runTasksInSeries([asyncTask1, asyncTask2])
  .then(() => {
    console.log("All tasks Completed");
  })
  .catch((err) => {
    console.log(err);
  });

//   Second version with returned promise     IMPORTANT

//   async function function1() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Function1 resolved");
//       }, 5000);
//     });
//   }

//   async function function2() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Function 2 resolved");
//       }, 2000);
//     });
//   }

//   async function resolver(taskList) {
//     return new Promise(async (resolve) => {
//       resolvedValues = [];
//       for (let task of taskList) {
//         const val = await task();
//         console.log("hello");
//         resolvedValues.push(val);
//         if (resolvedValues.length === 2) resolve(resolvedValues);
//       }

//       // taskList.forEach(async (task) => {
//       //    });
//     });
//   }

//   resolver([function1, function2]).then((value) => console.log(value));
