const memberRouter = require('express').Router()
const memberController = require('../controllers/memberController')

memberRouter.get('/', memberController.findAll)
memberRouter.post('/', memberController.create)
memberRouter.patch('/:id', memberController.updateOne)
memberRouter.delete('/:id', memberController.delete)


module.exports = memberRouter