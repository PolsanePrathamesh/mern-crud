const Course = require("../models/course");


const createCourse = (req, res) => {
    const {name} = req.body;
    if(!name){

        res.json({
            error:'Name is required'
        });
    }

    let course = 
};

module.exports = { createCourse };
