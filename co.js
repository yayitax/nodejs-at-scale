const fastPromise = new Promise((resolve, reject) => {
  fastFunction(resolve)
})

const slowPromise = new Promise((resolve, reject) => {
  slowFunction(resolve)
})

co(function * () {
  yield fastPromise
  yield slowPromise
}).then(() => {
  console.log('done')
})