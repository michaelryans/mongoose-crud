
const mongoose = require('mongoose')
const db = mongoose.connection;
const Book = require('../models/books.js')


class BookController {
    static findAll(req,res) {
        Book.find()
        .then( data => {
            res.json(data)
        })
        .catch( err => {
            res.json(err)
        })
    }

    static create(req,res) {
        let r = req.body
        let book = new Book(
            {
                isbn:r.isbn, 
                title:r.title,
                author:r.author,
                category:r.category,
                stock:r.stock
            })
        
        Book.create(book)
        .then(created => {
            res.status(201).json(created)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static update(req,res) {
        let r = req.body
        let update = new Book(
            {
                isbn:r.isbn, 
                title:r.title,
                author:r.author,
                category:r.category,
                stock:r.stock
            }
        )
        
        Book.updateOne({_id:req.params.id}, req.body)
        .then(data=> {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    }

    static deleteOne(req,res) {
        Book.deleteOne({_id:req.params.id})
        .then(data=> {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    }
}


module.exports = BookController