const { Router } = require("express");

const router = Router();

router.use(require("./resumes.route"));
router.use(require("./users.route"));
router.use(require("./vacancies.route"));
router.use(require("./users.route"));
router.use(require("./responses.route"));
router.use(require("./categories.route"));

module.exports = router;
