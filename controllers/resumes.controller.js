const Resume = require("../models/Resume.model");

module.exports.resumesController = {
  getResume: async (req, res) => {
    try {
      const resume = await Resume.find()
        .populate("userId")
        .populate("categoryId");
      res.json(resume);
    } catch (e) {
      res.json(e.message);
    }
  },
  getByCategories: async (req, res) => {
      try {
          const resume = await Resume.find({ categoryId: req.params.id }).populate("categoryId").populate("userId")
          res.json(resume)
      } catch (e) {
          res.json(e.message)
      }
  },
  postResume: async (req, res) => {
    try {
      const resume = await Resume.create({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        image: req.file.path,
        phone: req.body.phone,
        email: req.body.email,
        city: req.body.city,
        categoryId: req.body.categoryId,
        userId: req.user.id,
        position: req.body.position,
        experience: req.body.experience,
        education: req.body.education,
      });
      res.json(resume);
    } catch (e) {
      res.json(e.message);
    }
  },
  patchResume: async (req, res) => {
    try {
      const resume = await Resume.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        image: req.body.image,
        phone: req.body.phone,
        email: req.body.email,
        city: req.body.city,
        categoryId: req.body.categoryId,
        userId: req.user.id,
        position: req.body.position,
        experience: req.body.experience,
        education: req.body.education,
      });
      res.json(resume);
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteResume: async (req, res) => {
    try {
      await Resume.findByIdAndRemove(req.params.id);
      res.json("Резюме удалено");
    } catch (e) {
      res.json(e.message);
    }
  },
};
