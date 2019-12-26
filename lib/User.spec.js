// const User = require('./User')
// const expect = require('chai').expect

// describe('User module', () => {
//   describe('"up"', () => {
//     // it('should export a function', () => {
//     //   expect(User.up).to.be.a('function')
//     // })
//     // it('should return a Promise', () => {
//     //   const usersUpResult = User.up()
//     //   expect(usersUpResult.then).to.be.a('Function')
//     //   expect(usersUpResult.catch).to.be.a('Function')
//     // })
//     // it('should create a table named "users"', () => {
//     //   return User.up()
//     //     .then(() => db.schema.hasTable('users'))
//     //     .then((hasUsersTable) => expect(hasUsersTable).to.be.true)
//     // })
//     it('should create a table named "users"', function * () {
//       yield User.up()
//       const hasUsersTable = yield db.schema.hasTable('users')

//       expect(hasUsersTable).to.be.true
//     })
//   })
// })
// 'use strict'

// const User = require('./User')

// const chai = require('chai')
// const chaiAsPromised = require('chai-as-promised')

// const db = require('./database')

// chai.use(chaiAsPromised)
// const expect = chai.expect

// describe('User module', () => {
//   describe('"up"', () => {
//     // ...
//     it('should create a table named "users"', function * () {
//       yield User.up()

//       return expect(db.schema.hasTable('users'))
//         .to.eventually.be.true
//     })
//   })
// })

'use strict'

const User = require('./User')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

const db = require('./database')

chai.use(chaiAsPromised)
const expect = chai.expect

describe('User module', () => {
  describe('"up"', () => {
    function cleanUp() {
      return db.schema.dropTableIfExists('users')
    }

    before(cleanUp)
    after(cleanUp)

    it('should export a function', () => {
      expect(User.up).to.be.a('Function')
    })

    it('should return a Promise', () => {
      const usersUpResult = User.up()
      expect(usersUpResult.then).to.be.a('Function')
      expect(usersUpResult.catch).to.be.a('Function')
    })

    it('should create a table named "users"', function* () {
      yield User.up()

      return expect(db.schema.hasTable('users'))
        .to.eventually.be.true
    })
  })
})

describe('fetch', () => {
  it('should export a function', () => {
    it('should export a function', () => {
      expect(User.fetch).to.be.a('Function')
    })
    it('should return a Promise', () => {
      const usersFetchResult = User.fetch()
      expect(usersFetchResult.then).to.be.a('Function')
      expect(usersFetchResult.catch).to.be.a('Function')
    })

    describe('with inserted rows', () => {
      const testName = 'Peter'

      before(() => User.up())
      beforeEach(() =>
        Promise.all([
          db.insert({
            name: testName
          }).into('users'),
          db.insert({
            name: 'John'
          }).into('users')
        ])
      )

      it('should return the users by their name', () =>
        expect(
          User.fetch(testName)
            .then(_.map(
              _.omit(['id', 'created_at', 'updated_at'])))
        ).to.eventually.be.eql([{
          name: 'Peter'
        }])
      )

      it('should return users with timestamps and id', () =>
        expect(
          User.fetch(testName)
            .then((users) => users[0])
        ).to.eventually.have.keys('created_at', 'updated_at', 'id', 'name')
      )
    })
  })
})