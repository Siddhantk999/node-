
const mongoose = require('mongoose')


/// create schema 
const Schema = mongoose.Schema

const personSchema = new Schema({
    name : {
        type: String,
        required : true
    },

    address : {
      type : String
    },
    age : {
        type : Number,
    },
    work : {
        type : String,
        enum : ["actor","web developer","rapper"],
        required : true
    },
    email : {
        type : String,
        unqiue : true,
        required  : true
    },

    salary : {
        type : Number,
        required : true
    }
})

//  create a model
const  person = mongoose.model('person',personSchema)

module.exports = person;