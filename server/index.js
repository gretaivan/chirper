const server = require('./server')
const port = process.env.PORT || 3000
const Entry = require('./models/entry')


server.listen(port, () => console.log(`\nExpress departing now from port ${port}!\n`))
