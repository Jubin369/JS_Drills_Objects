const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = defaults(testObject, { lastname: "wayne" });
console.log(result);

function defaults(obj, defaultProps) {
  for (let k in defaultProps) {
    obj[k] = defaultProps[k];
  }
  return obj;
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
}
