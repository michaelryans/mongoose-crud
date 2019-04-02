const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {userNewUrlParser: true})

const Schema = mongoose.Schema
const transactionSchema = new Schema({
    member: { type: Schema.Types.ObjectId, ref: 'Member' },
    in_date: Date,
    out_date: Date,
    due_date: Date,
    fine: Number,
    booklist: [{type: Schema.Types.ObjectId, ref: 'Book'}]
})

transactionSchema.post("updateOne", function(doc) {
    if(doc.out_date > doc.due_date) {
        doc.fine = (Math.ceil((doc.out_date.getTime() - doc.due_date.getTime())/1000/60/60/24))*1000
    }
});


let Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction