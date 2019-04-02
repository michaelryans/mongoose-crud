const bookRouter = require('express').Router()
const BookController = require('../controllers/bookController')

bookRouter.get('/', BookController.findAll)
bookRouter.post('/', BookController.create)
bookRouter.patch('/:id', BookController.update)
bookRouter.delete('/:id', BookController.deleteOne)


module.exports = bookRouter