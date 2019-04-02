const app = require('express')()
const PORT = 3000
const bookRouter = require('./routers/bookRouter')
const memberRouter = require('./routers/memberRouter')
const transactionRouter = require('./routers/transactionRouter')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraries', { useNewUrlParser: true });

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/books', bookRouter)
app.use('/members', memberRouter)
app.use('/transactions', transactionRouter)

app.get('/*', (req, res) => {
    res.status(404).json('Error 404 not found')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})




// getting-started.js
