const createCourse = (req, res) => {
    const {name} = req.body;
    if(!name){

        res.json({
            error
        });
    }
};

module.exports = { createCourse };
