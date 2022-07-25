const { Router } = require("express");

const router = Router();

router.use(require("./resumes.route"));

module.exports = router;
