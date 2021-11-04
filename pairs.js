const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = pairs(testObject);
console.log(result);

function pairs(obj) {
  let arrPairs = [];

  for (let k in obj) {
    arrPairs.push([k, obj[k]]);
  }
  return arrPairs;
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
}
