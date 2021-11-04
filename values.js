const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = values(testObject);
console.log(result);

function values(obj) {
  let arrValues = [];

  for (let k in obj) {
    arrValues.push(obj[k]);
  }
  return arrValues;
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
}
