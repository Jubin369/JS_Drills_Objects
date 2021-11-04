const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

let result = mapObject(testObject);
console.log(result);

function mapObject(obj, cb) {
  let data = {};

  for (let k in obj) {
    data[k] = obj[k] + " map object data added";
  }

  return data;
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
}
