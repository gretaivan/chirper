const server = require('./server')
const port = process.env.PORT || 4000
const Entry = require('./models/entry')


server.listen(port, () => console.log(`\nExpress departing now from port 3000!\n`))
Entry.addReaction(1, "like")
// Entry.addReaction(0, "dislike")
// Entry.addReaction(3, "tree")