const TransactionController=require('../controllers/transactionController')
const transactionRouter = require('express').Router()

// transactionRouter.get('/', (req,res) => {
//     res.json('test')
// })
transactionRouter.get('/', TransactionController.findAll)
transactionRouter.post('/', TransactionController.create)
// transactionRouter.patch('/:id', TransactionController.updateOne)
// transactionRouter.delete('/:id', TransactionController.deleteOne)


module.exports = transactionRouter