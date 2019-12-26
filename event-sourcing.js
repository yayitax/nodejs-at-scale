// current account states (how it looks in our DB now)
const accounts = { 
  account1: { balance: 100 },
  account2: { balance: 50 }
}

// past events (should be persisted somewhere, for example in a DB)
const events = [
  { type: 'open', id: 'account1', balance: 150, time: 0 },
  { type: 'open', id: 'account2', balance: 0, time: 1 },
  { type: 'transfer', fromId: 'account1', toId: 'account2', amount: 50, time: 2 }
]

// complete rebuild
const accounts = events.reduce((accounts, event) => {
  if (event.type === 'open') {
    accounts[event.id].balance = event.balance
  } else if (event.type === 'transfer') {
    accounts[event.fromId].balance -= event.amount
    accounts[event.toId].balance += event.amount
  }
  return accounts
}, {})

// undo last event
const accounts = events.splice(-1).reduce((accounts, event) => {
  if (event.type === 'open') {
    delete accounts[event.id]
  } else if (event.type === 'transfer') {
    accounts[event.fromId].balance += event.amount
    accounts[event.toId].balance -= event.amount
  }
  return accounts
}, {})

// query specific time
function getAccountsAtTime (time) {
  return events.reduce((accounts, event) => {
    if (time > event.time) {
      return accounts
    }

    if (event.type === 'open') {
      accounts[event.id].balance = event.balance
    } else if (event.type === 'transfer') {
      accounts[event.fromId].balance -= event.amount
      accounts[event.toId].balance += event.amount
    }
    return accounts
  }, {})
}

const accounts = getAccountsAtTime(1)