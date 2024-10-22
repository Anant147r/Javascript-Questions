var flattendObj = {};
const flattenObject = (obj, prefix) => {
  Object.keys(obj).forEach((key) => {
    var newKey = `${prefix}_${key}`;
    if (typeof obj[key] === "object") {
      flattenObject(obj[key], newKey);
    } else {
      flattendObj[newKey] = obj[key];
    }
  });
};
console.log(flattendObj);
