const createCourse = (req, res) => {
    const {name} = req
  res.json("course connected");
};

module.exports = { createCourse };
