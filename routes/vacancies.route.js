const { Router } = require("express");
const { vacanciesController } = require("../controllers/vacancies.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router()

router.get("/vacancy", vacanciesController.getVacancies)
router.get("/vacancy/:id", vacanciesController.getVacancyById)
router.get("/vacancyBycategoryId/:id", vacanciesController.getVacanciesByCategory)
router.post("/vacancy", vacanciesController.postVacancy)
router.patch("/vacancy/:id",authMiddleware, vacanciesController.patchVacancy)
router.patch("/vacancy/response/:id",authMiddleware, vacanciesController.addResponse)
router.delete("/vacancy/:id", vacanciesController.deleteVacancy)

module.exports = router;
