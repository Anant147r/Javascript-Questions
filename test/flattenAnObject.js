const newObject = {};
const flatterObj = (obj, prefix) => {
  //   const newObject = {};
  Object.keys(obj).forEach((key, index) => {
    const newPrefix = prefix ? prefix + "." + [key] : [key];
    if (typeof obj[key] === "object") flatterObj(obj[key], newPrefix);
    else newObject[newPrefix] = obj[key];
  });
  //   return newObject;
};

flatterObj({ name: "Anant", value: { value1: "Anant", value2: "Rawat" } }, "");

console.log(newObject);
