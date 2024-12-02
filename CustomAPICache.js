function cacheAPI(callback) {
  const mapCache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (mapCache.has(key)) return mapCache.get(key);
    mapCache.set(
      key,
      callback(...args).catch((err) => {
        mapCache.delete(key);
        return new Error(err);
      })
    );
    return mapCache.get(key);
  };
}

function todo(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((value) => value);
}

async function callAPIs() {
  const memoizedCacheAPI = cacheAPI(todo);
  const data1 = await memoizedCacheAPI(1);
  const data2 = await memoizedCacheAPI(3);
  const data3 = await memoizedCacheAPI(1);

  console.log(data1);
  console.log(data2);
  console.log(data3);
}

callAPIs();
