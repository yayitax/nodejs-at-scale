// index.js
'use strict'

const processType = process.env.PROCESS_TYPE

if (processType === 'web') {
  require('./web')
} else if (processType === 'twitter-stream-worker') {
  require('./worker/twitter-stream')
} else if (processType === 'social-preprocessor-worker') {
  require('./worker/social-preprocessor')
} else {
  throw new Error(`${processType} is an unsupported process type. Use one of: 'web', 'twitter-stream-worker', 'social-preprocessor-worker'!`)
}