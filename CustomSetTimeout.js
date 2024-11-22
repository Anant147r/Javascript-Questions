const MYTIMER = {
  queue: [],
  timerId: 0,
  setTimeout: function (callback, delay, ...args) {
    this.timerId += 1;
    this.queue.push({
      timerId: this.timerId,
      callback,
      args,
      time: Date.now() + delay,
    });

    this.queue.sort((first, second) => first.timerId - second.timerId);
    return this.timerId;
  },
  clearTimeout: function (id) {
    this.queue = this.queue.filter((currentID) => currentID !== id);
  },
  run: function () {
    while (this.queue.length != 0) {
      const event = this.queue.shift();
      if (event.time < Date.now()) {
        event.callback(...event.args);
      } else this.queue.push(event);
    }
  },
};

MYTIMER.setTimeout(() => {
  console.log("Hello");
}, 3000);
MYTIMER.run();

// const MY_TIMER = {
//   timerId: 1,
//   queue: [],
//   // create a new timer
//   setTimeout: function (cb, time, ...args) {
//     const id = this.timerId++;

//     // add a new entry to the queue
//     // the time at which it will run
//     // will be added to the current date
//     // so that it will run next
//     this.queue.push({
//       id,
//       cb,
//       time: Date.now() + time,
//       args,
//     });

//     // sort the queue in the ascending order of time
//     this.queue.sort((a, b) => a.time - b.time);

//     // return the id
//     return id;
//   },

//   // to stop the timer
//   clearTimeout: function (removeId) {
//     // remove the entry with the given id
//     this.queue = this.queue.filter(({ id }) => id !== removeId);
//   },

//   // start running the timer
//   run: function () {
//     // this will continuously run the loop
//     // till all the entry in the queue are invoked
//     while (true) {
//       const entry = this.queue.shift();
//       const { cb, time, args } = entry;

//       // if time hass passed
//       // invoke it
//       if (Date.now() > time) {
//         cb(...args);
//       }
//       // else push it back into the queue
//       else {
//         this.queue.unshift(entry);
//       }

//       // if there are no further entries
//       // break the loop
//       if (this.queue.length === 0) {
//         break;
//       }
//     }
//   },
// };

// MY_TIMER.setTimeout(() => {
//   console.log(1);
// }, 2500);
// MY_TIMER.setTimeout(() => {
//   console.log(2);
// }, 2000);
// MY_TIMER.setTimeout(() => {
//   console.log(3);
// }, 2500);
// MY_TIMER.setTimeout(() => {
//   console.log(4);
// }, 3000);

// MY_TIMER.run();

// // Output:
// // 2
// // 1
// // 3
// // 4
