const bcrypt = require('bcrypt')

const hashpassword = (password)=>{
    new Promise((resolve, reject)=>{
        bcrypt.genSalt(12)
    })
}