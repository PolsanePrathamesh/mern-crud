const Course = require("../models/course");


const createCourse = async(req, res) => {
    const {name} = req.body;
    if(!name){

        res.json({
            error:'Name is required'
        });
    }

    const exists = await Course.findOne({ email });
    if (exists) {
      return res.json({ error: "User already exists" }); 
    }
    const user = await User.create({ name});
    return res.json(rest);

};

module.exports = { createCourse };