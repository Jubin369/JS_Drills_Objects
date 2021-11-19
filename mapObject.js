
function mapObject(obj, cb) {
  let data = {};

  for (let k in obj) {
    data[k] = cb(obj[k]);
  }

  return data;
}

module.exports = {mapObject};
