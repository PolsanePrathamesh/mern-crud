const createCourse = (req, res) => {
    const {name} = req.body;
    if(!name){

        res.json({
            error:'Name is required'
        });
    }
};

module.exports = { createCourse };
