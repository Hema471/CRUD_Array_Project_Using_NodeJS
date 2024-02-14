let { Courses } = require("../data/Courses");
//const { body, validationResult } = require("express-validator");
const { validationResult } = require("express-validator");

// Get
const getAllCourses = (req, res) => {
  res.json(Courses);
};

// Get
const getSingleCourse = (req, res) => {
  const courseId = +req.params.courseId;
  const Course = Courses.find((x) => courseId == x.id);
  //   console.log(typeof courseId);
  if (!Course) {
    res.status(404).send("Course Not Found");
  } else {
    res.json(Course);
  }
};
// Post
const addNewCourse = (req, res) => {
  const errors = validationResult(req);
  // console.log(errors);
  // console.log(req.body);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  } else {
    Courses.push({
      id: Courses.length + 1,
      ...req.body,
    });
    res.status(201).json(Courses);
  }
  // if (!req.body.title || !req.body.price) {
  //   res.status(400);
  //   res.send("Title OR Price Is Empty");
  // } else {
  //   Courses.push({
  //     id: Courses.length + 1,
  //     ...req.body,
  //   });
  //   res.status(201).json(Courses);
  // }
};

// Patch
const updateCourse = (req, res) => {
  const courseId = +req.params.courseId;
  let Course = Courses.find((x) => courseId == x.id);
  if (!Course) {
    res.status(404).send("Course Not Found");
  } else {
    Course = { ...Course, ...req.body };
    res.status(200).json(Course);
  }
};

// Delete
const deleteCourse = (req, res) => {
  const courseId = +req.params.courseId;
  Courses.filter((x) => x.id !== courseId);
  res.status(200).json("Deleted Successfully");
};

module.exports = {
  getAllCourses,
  getSingleCourse,
  addNewCourse,
  updateCourse,
  deleteCourse,
};
