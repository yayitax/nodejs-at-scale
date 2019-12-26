class Car {
  constructor (options) {
    this.engine = options.engine
  }

  start () {
    this.engine.start()
  }
}

function create (options) {
  return new Car(options)
}

module.exports = create