const { Router } = require("express");
const { resumesController } = require("../controllers/resumes.controller");

const fileMiddleware = require("../middlewares/file");

const authMiddleware = require('../middlewares/auth.middleware')


const router = Router();

router.get("/resume", resumesController.getResume);
router.get("/resume/category/:id", resumesController.getByCategories);
router.post("/resume", authMiddleware,fileMiddleware.single('img'), resumesController.postResume);
router.patch("/resume/:id", authMiddleware,resumesController.patchResume);
router.delete("/resume/:id", authMiddleware,resumesController.deleteResume);

module.exports = router;
 