const mongoose = require('mongoose')

const {Schema} = mongoose

const userScheme = new Schema({
    name:String,
    email:{
        required:true,
        type:String,
        uniq
    }
})