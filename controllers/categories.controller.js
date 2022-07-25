const Category = require("../models/Categories.model");

module.exports.categoriesController = {
  getCategory: async (req, res) => {
    try {
      const category = await Category.find();
      res.json(category);
    } catch (error) {
      res.json(error.message);
    }
  },

  postCategory: async (req, res) => {
    try {
      const category = await Category.create({
        text: req.body.text,
      });
      res.json(category);
    } catch (error) {
      res.json(error.message);
    }
  },

  patchCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
      });
      res.json(category);
    } catch (error) {
      res.json(error.message);
    }
  },

  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (error) {
      res.json(error.message);
    }
  },
};
