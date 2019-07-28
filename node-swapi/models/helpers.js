/*
0. Re-map ID's to Hypermedia Urls
1. Search
2. Pagination

*/
const config = require('../config.js')

module.exports = { reshapeObjectFields }

function reshapeObjectFields(objects) {
  return objects.map(obj => {
    return { id: obj.pk, url: `${config.baseUrl}/${obj.model.replace('resources.', '')}${obj.pk}/`, ...obj.fields }
  })
}

// function reshapeObjectFields(objects) {
//   return objects.map(obj => {
//     return { id: obj.pk, ...obj.fields }
//   })
// }
