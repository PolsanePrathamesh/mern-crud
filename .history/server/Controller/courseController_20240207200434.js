const Course = require("../models/course");


const createCourse = async(req, res) => {
    const {name} = req.body;
    if(!name){

        res.json({
            error:'Name is required'
        });
    }

    const exists = await Course.findOne({ name });
    if (exists) {
      return res.json({ error: "Course already exists" });
    }};
    const course = await ourse.create({ name });
    return res.json(course)


module.exports = { createCourse };
