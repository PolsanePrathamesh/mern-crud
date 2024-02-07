const bcrypt = require("bcrypt");

const hashpassword = (password) => {
  new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err){
        reject
      }
      bcrypt.hash(password, salt, (err, hash) => {
        return resolve(hash);
      });
    });
  });
};

const comparepassword = (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};

module.exports = { hashpassword, comparepassword };
