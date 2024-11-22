let interval = {};
window.setInterval = function (callback, delay) {
  let rndId = Math.floor(Math.random() * 1000);
  function execute() {
    let id = setTimeout(() => {
      callback();
      execute();
    }, delay);

    if (!interval[rndId]) interval[rndId] = [];
    interval[rndId].push(id);
  }
  execute();
  return rndId;
};

window.clearInterval = function (id) {
  while (!interval[id].isEmpty()) clearTimeout(interval[id].pop());
};
