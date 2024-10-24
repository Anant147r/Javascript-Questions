// const globalObj = window !== undefined ? window : global;
// console.log(globalObj);

(function (window) {
  let interval = {};
  window.setInterval = function (fun, delay) {
    let rndId = Math.floor(Math.random() * 1000);
    const execute = function () {
      let id = setTimeout(() => {
        fun();
        execute();
      }, delay);

      if (!interval[rndId]) {
        interval[rndId] = [];
      }
      // Dont know why we are making rndId as key in the interval object
      interval[rndId].push(id);
      //   console.log(rndId, interval[rndId]);
    };

    execute();

    return rndId;
  };

  window.clearInterval = function (rid) {
    // console.log("Rid and Interval", rid, interval);
    while (interval[rid].length > 0) {
      //   console.log(interval[rid]);
      clearTimeout(interval[rid].pop());
    }
  };
})(global);

const pid = setInterval(() => {
  console.log("Hello world");
}, 2000);

// console.log("PID", pid);

setTimeout(() => {
  clearInterval(pid);
}, 10000);
