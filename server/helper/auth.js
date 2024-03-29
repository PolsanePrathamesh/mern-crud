const bcrypt = require("bcrypt");

const hashpassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });
  });
};

const comparepassword = (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};

module.exports = { hashpassword, comparepassword };
