const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = Promise.resolve("Promise 2 resolved");

const promise3 = 8;

function myPromiseAllSettled(promisesArr) {
  let wrappedPromises = promisesArr.map((promise) =>
    Promise.resolve(promise)
      .then((val) => ({ status: "fulfilled", value: val }))
      .catch((err) => ({ state: "rejected", reason: err }))
  );

  return Promise.all(wrappedPromises);
}
const promiseAllSettled = myPromiseAllSettled([promise1, promise2, promise3]);
promiseAllSettled.then((res) => console.log(res));
// [
//   { status: "fulfilled", value: "Promise 1 resolved" },
//   { status: "fulfilled", value: "Promise 2 resolved" },
//   { status: "fulfilled", value: 8 },
// ];
