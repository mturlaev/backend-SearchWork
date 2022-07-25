const { Router } = require("express");
const {
  categoriesController,
} = require("../controllers/categories.controller");

const router = Router();

router.get("/category", categoriesController.getCategory);
router.post("/category", categoriesController.postCategory);
router.patch("/category/:id", categoriesController.patchCategory);
router.delete("/category/:id", categoriesController.deleteCategory);

module.exports = router;
