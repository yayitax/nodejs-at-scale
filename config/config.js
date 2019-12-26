// // config/config.js
// 'use strict'

// // required environment variables
// [
//   'NODE_ENV',
//   'PORT'
// ].forEach((name) => {
//   if (!process.env[name]) {
//     throw new Error(`Environment variable ${name} is missing`)
//   }
// })

// const config = {
//   env: process.env.NODE_ENV,
//   logger: {
//     level: process.env.LOG_LEVEL || 'info',
//     enabled: process.env.BOOLEAN ? process.env.BOOLEAN.toLowerCase() === 'true' : false
//   },
//   server: {
//     port: Number(process.env.PORT)
//   }
//   // ...
// }

// module.exports = config

// 'use strict'

// const joi = require('joi')

// const envVarsSchema = joi.object({
//   NODE_ENV: joi.string()
//     .allow(['development', 'production', 'test', 'provision'])
//     .required(),
//   PORT: joi.number()
//     .required(),
//   LOGGER_LEVEL: joi.string()
//     .allow(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
//     .default('info'),
//   LOGGER_ENABLED: joi.boolean()
//     .truthy('TRUE')
//     .truthy('true')
//     .falsy('FALSE')
//     .falsy('false')
//     .default(true)
// }).unknown()
//   .required()

// const { error, value: envVars } = joi.validate(process.env, envVarsSchema)
// if (error) {
//   throw new Error(`Config validation error: ${error.message}`)
// }

// const config = {
//   env: envVars.NODE_ENV,
//   isTest: envVars.NODE_ENV === 'test',
//   isDevelopment: envVars.NODE_ENV === 'development',
//   logger: {
//     level: envVars.LOGGER_LEVEL,
//     enabled: envVars.LOGGER_ENABLED
//   },
//   server: {
//     port: envVars.PORT
//   }
//   // ...
// }

// module.exports = config

// config/config.js
'use strict'

const common = require('./components/common')
const logger = require('./components/logger')
const redis = require('./components/redis')
const server = require('./components/server')

module.exports = Object.assign({}, common, logger, redis, server)
