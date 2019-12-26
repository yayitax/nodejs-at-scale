// index.js
const debugHttpIncoming = require('debug')('http:incoming')
const debugHttpOutgoing = require('debug')('http:outgoing')

let outgoingRequest = {
  url: 'https://risingstack.com'
}

// sending some request
debugHttpOutgoing('sending request to %s', outgoingRequest.url)

let incomingRequest = {
  body: '{"status": "ok"}'
}

// serving some request
debugHttpOutgoing('got JSON body %s', incomingRequest.body)