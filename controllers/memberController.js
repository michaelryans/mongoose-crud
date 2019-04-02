const mongoose = require('mongoose')
const Member = require('../models/members.js')

class memberController {

    static create(req,res) {
        let r = req.body
        let member = new Member({
            name:r.name,
            address:r.address,
            zipcode:r.zipcode,
            email:r.email,
            phone:r.phone
        })
        Member.create(member)
        .then(created => {
            res.status(201).json(created)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static findAll(req,res){
        Member.find()
        .then(datas => {
            res.status(200).json(datas)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }

    static updateOne(req,res){
        Member.updateOne({_id:req.params.id}, req.body)
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }

    static delete(req,res) {
        Member.deleteOne({_id:req.params.id})
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }
    
}


module.exports = memberController