const mongoose = require('mongoose')

const {Schema} = mongoose

const userScheme = new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    pass
})