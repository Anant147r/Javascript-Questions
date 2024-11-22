const checkValue = (value) => {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  } else if (typeof value === "string") return stringString(value);
  else if (typeof value === "object") {
    return stringifyObject(value);
  }
};

const stringifyObject = (obj) => {
  const result = "";
  result += "{";
  Object.keys(obj).forEach((key, index) => {
    result += key;
    result += ":";
    result += checkValue(obj[key]);
    if (index < Object.keys.length - 1) result += ",";
  });
};
