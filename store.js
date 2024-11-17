const mongoose = require('mongoose')

const Schema = mongoose.Schema

const store = new Schema({
    name : {
        type :  String,
        required : true
    },
    price : {
     type : Number,
     required :  true
    },
    companyName : {
        type  : String,
        required : true
    },
    num_sales : {
        type : Number,
        default : 0
    }
})

const storeItems  = mongoose.model('store',store)

module.exports =  storeItems
