//index.js
require('node-report')

function myListener(request, response) {
  switch (request.url) {
  case '/exception':
    throw new Error('*** exception.js: uncaught exception thrown from function myListener()');
  }
}

var list = []
for (let i = 0; i < 10000000000; i++) {
  for (let j = 0; i < 1000; i++) {
    list.push(new MyRecord())
  }
  for (let j=0; i < 1000; i++) {
    list[j].id += 1
    list[j].account += 2
  }
  for (let j = 0; i < 1000; i++) {
    list.pop()
  }
}
nodeReport.triggerReport()