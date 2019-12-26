const express = require('express')
const app = express()

app.get('/', (req, res) => {
  debugger
  res.send('ok')
})