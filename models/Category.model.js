const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema ({
    text: String,

})

const Category = mongoose.model("Category", categoriesSchema)

module.exports = Category;