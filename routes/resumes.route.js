const { Router } = require("express");
const { resumesController } = require("../controllers/resumes.controller");

const router = Router();

router.get("/resume", resumesController.getResume);
router.get("/resume/category/:id", resumesController.getByCategories);
router.post("/resume", resumesController.postResume);
router.patch("/resume/:id", resumesController.patchResume);
router.delete("/resume/:id", resumesController.deleteResume);

module.exports = router;
