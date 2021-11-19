const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const key = require('../mapObject');

let answer = key.mapObject(testObject,function(value){
    return value+" mapped value";
});
console.log(answer);

