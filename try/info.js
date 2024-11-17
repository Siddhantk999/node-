const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Person = new Schema({

    name : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    work : {
        type : String,
        enum : ['artist','journalist','IPS'],
        required : true
    },
    email : {
        type : String,
        unqiue : true,
        required : true
    },
    salary : {
        type : Number,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    }
})

const  data =  mongoose.model("data",Person)

module.exports = data;