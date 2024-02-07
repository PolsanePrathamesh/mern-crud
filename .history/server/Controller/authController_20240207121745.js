// authController.js
const test = (req, res) => {
  res.send("Hello from the test route!");
};

const registerUser = (req, res) => {
    try{
        const {name, email, password} = req.params
    }catch{

    }
};

module.exports = { test, registerUser };
