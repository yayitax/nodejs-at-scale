// const myAddon = require('./build/Release/addon')
// const myAddon = require('bindings')('addon')
// console.log(myAddon.whoami())

'use strict'

const addon = require('./build/Release/addon.node')

console.log(`native addon whoami: ${addon.WhoAmI()}`)

for (let i = 0; i < 6; i++) {
  console.log(`native addon increment: ${addon.Increment(i)}`)
}