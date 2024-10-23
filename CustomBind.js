const obj = {
  name: "Anant",
};

function myFunction(arg1, arg2) {
  console.log(arg1 + " " + this.name + " " + arg2);
}

Function.prototype.myBind = function (o) {
  o.newBind = this;
  return (...arg) => {
    o.newBind(...arg);
  };
};

const newFunction = myFunction.myBind(obj);
newFunction("Hello", "Pineapple");
