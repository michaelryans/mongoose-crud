const Transaction = require('../models/transactions')
const mongoose = require('mongoose')

class TransactionController {
    static create(req,res) {
        Transaction.create(req.body)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static updateOne(req,res) {
        // Transaction.findOne({_id:req.params.id})

    }

    // static deleteOne(req,res) {

    // }

    static findAll(req,res) {
        Transaction.find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}


module.exports = TransactionController