const Vacancy = require("../models/Vacancy.model");

module.exports.vacanciesController = {
  getVacancies: async (req, res) => {
    try {
      const vacancy = await Vacancy.find()
        .populate("userId")
        .populate("categoryId");
      res.json(vacancy);
    } catch (error) {
      res.json(error.message);
    }
  },
  getVacancyById: async (req, res) => {
    try {
      const vacancy = await Vacancy.findById(req.params.id)
        .populate("userId")
        .populate("categoryId");
      res.json(vacancy);
    } catch (error) {
      res.json(error.message);
    }
  },
  getVacanciesByCategory: async (req, res) => {
    try {
      const vacancy = await Vacancy.find({ categoryId: req.params.id })
        .populate("userId")
        .populate("categoryId");
      res.json(vacancy);
    } catch (error) {
      res.json(error.message);
    }
  },
  postVacancy: async (req, res) => {
    try {
      const vacancy = await Vacancy.create({
        name: req.body.name,
        text: req.body.text,
        salary: req.body.salary,
        city: req.body.city,
        company: req.body.company,
        userId: req.user.id,
        categoryId: req.body.categoryId,
        checked: req.body.checked
      });
      res.json(vacancy)
    } catch (error) {
      res.json(error.message);
    }
  },
  patchVacancy: async (req, res) => {
    try {
        const vacancy = await Vacancy.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        text: req.body.text,
        salary: req.body.salary,
        city: req.body.city,
        company: req.body.company,
        userId: req.user.id,
        categoryId: req.body.categoryId,
        checked: req.body.checked
        }, {new:true})
        res.json(vacancy)
    } catch (error) {
        res.json(error.message)
    }
  },
  deleteVacancy: async (req, res) => {
    try {
        await Vacancy.findByIdAndRemove(req.params.id);
        res.json("Вакансия удалена")
    } catch (error) {
        res.json(error.message)
    }
  },

  addResponse: async (req, res) => {
    try {
       const response =  await Vacancy.findByIdAndUpdate(req.params.id, {
          $push:{
            responses: req.user.id
          } }, {new: true});
        return res.json(response)
    } catch (error) {
       return res.json({error: error.message})
    }
  },
};
