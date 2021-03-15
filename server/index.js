const server = require('./server')
const port = process.env.PORT || 3000



server.listen(port, () => console.log(`\nExpress departing now from port 3000!\n`))