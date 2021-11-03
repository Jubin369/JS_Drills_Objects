const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = keys(testObject);
console.log(result);

function keys(obj) {
  let keyNames = [];

  for (let k in obj) {
    keyNames.push(k);
  }
  return keyNames;
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
}
