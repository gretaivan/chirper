const server = require('./server')
<<<<<<< HEAD
const port = process.env.PORT || 4000
const Entry = require('./models/entry')
=======
const port = process.env.PORT || 3000
//const Entry = require('./models/entry')
>>>>>>> greta/staging

server.listen(port, () => console.log(`\nExpress departing now from port ${port}!\n`))

