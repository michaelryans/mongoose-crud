const mongoose = require('mongoose');

const Schema = mongoose.Schema
const memberSchema = new Schema({
    name: String,
    address: String,
    zipcode: String,
    email: {type:String,match:[/\S+@\S+\.\S+/,'Incorrect email address'],
            validate: {
                validator: function() {
                    return Member.find({email:this.email})
                    .then(data => {
                        console.log(data)
                        return data < 1
                    })
                },
                message: "email not unique"
            }},
    phone: {
        type: String,
        minlength: [11, 'Minimal length is 11'],
        maxlength: [13, 'Maximum length is 13']
    }
})

let Member = mongoose.model('Member', memberSchema)

module.exports = Member