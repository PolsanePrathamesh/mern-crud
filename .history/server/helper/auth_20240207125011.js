const bcrypt = require('bcrypt')

const hashpassword = (password)=>{
    new Promise((resolve, reject)=>{
        bcrypt.genSalt(12,(err,salt)=>{
            if(err) return reject(err)
            bcrypt.hash
        })
    })
}