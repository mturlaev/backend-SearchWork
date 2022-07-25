const { Router } = require("express");
const { vacanciesController } = require("../controllers/vacancies.controller");

const router = Router()

router.get("/vacancy", vacanciesController.getVacancies)
router.get("/vacancy/:id", vacanciesController.getVacancyById)
router.get("/vacancyBycategoryId/:id", vacanciesController.getVacanciesByCategory)
router.post("/vacancy", vacanciesController.postVacancy)
router.patch("/vacancy/:id", vacanciesController.patchVacancy)
router.delete("/vacancy/:id", vacanciesController.deleteVacancy)

module.exports = router;
