const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = invert(testObject);
console.log(result);

function invert(obj) {
  let data = {};

  for (let k in obj) {
    let tmp = obj[k];
    data[tmp] = k;
  }

  return data;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
}
