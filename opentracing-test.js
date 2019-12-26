const request = require('request')

// Request options
const uri = 'https://risingstack.com'
const method = 'GET'
const headers = {}

request({ uri, method, headers }, (err, res) => {
  if (err) {
    return
  }
})