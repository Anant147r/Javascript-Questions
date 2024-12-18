async function function1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Function1 resolved");
    }, 2000);
  });
}

async function function2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Function 2 resolved");
    }, 1000);
  });
}

async function resolver(taskList) {
  return new Promise((resolve) => {
    resolvedValues = [];
    taskList.forEach((task) => {
      task()
        .then((value) => {
          resolvedValues.push(value);
        })
        .finally(() => {
          if (resolvedValues.length === 2) {
            resolve(resolvedValues);
          }
        });
    });
  });
}

resolver([function1, function2]).then((value) => console.log(value));
