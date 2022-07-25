const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema ({
    name: String,

})

const Category = mongoose.model("Category", categoriesSchema)

module.exports = Category;