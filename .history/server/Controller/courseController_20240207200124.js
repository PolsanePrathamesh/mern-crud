const createCourse = (req, res) => {
    const {name} = req.body;
    if(!name){
        
    }
  res.json("course connected");
};

module.exports = { createCourse };
