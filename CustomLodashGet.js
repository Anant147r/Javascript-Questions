// .get() is a very commonly used utility function, it does the following things:

// Given an object, and a path, return the value at the path
// If the path does not exist in the given object, return the default value
// It is easier to understand by example (the following examples are from Lodash source code)

// const object = { a: [{ b: { c: 3 } }] };

// //=> 3
// get(object, "a[0].b.c");

// //=> 3
// get(object, 'a[0]["b"]["c"]');

// //=> 'default
// get(object, "a[100].b.c", "default");

// Therefore, if there is a built-in castPath, what .get() is actually doing is

// // Create an object, for example
// const object = { a: [{ b: { c: 3 } }] };

// // Give a path, and find the value through .get(), for example
// get(object, ["a", "0", "b", "c"]); // Return 3

function lodashGet(object, path, defaultValue) {
  // If the object is null, return the default value
  if (object == null) {
    return defaultValue;
  }

  let count = 0;
  const length = path.length;

  // Pass through the object one by one according to the path, for example
  // path[0] is 'a', so the first loop object will become object['a'] which is [{ b: { c: 3 } }]
  // After the first loop, count plus 1, so object will become object[path[1]]
  // which is [object['0']], which is { b: { c: 3 } }
  // Then count plus 1 again, so object will become object[path[2]]
  // which is object['b'], which is { c: 3 }
  // Then count plus 1 again, so object will become object[path[3]]
  // which is object['c'], which is 3
  // At this time count is 4, since length is also 4, so count is not less than length, so the while loop will be terminated
  while (object != null && count < length) {
    object = object[path[count++]];
  }

  // Because if the object is null, it will be terminated before the length is reached
  // In this case, it means that the path cannot be found, so it will be undefined
  // For example, if the path is ['a', '1', 'b', 'c']
  // Because object['1'] is undefined, so the while loop will be terminated when count is 2
  // In this case, the default value will be returned
  return count && count == length ? object : defaultValue;
}
