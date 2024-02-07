const createCourse = (req, res) => {
    const {name} = req.body
  res.json("course connected");
};

module.exports = { createCourse };
