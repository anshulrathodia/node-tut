const { log } = require('console')
const os = require('os')

// info abou the current user
const user = os.userInfo()
console.log(user)

// method returns the uptime in seconds
log(`the system uptime is ${os.uptime} second`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
  }
  console.log(currentOS)