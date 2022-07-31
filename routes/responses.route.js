const { Router } = require("express");
const { responsesController } = require("../controllers/responses.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();

router.get("/response", responsesController.getResponses);
router.post("/response", responsesController.postResponse);
router.patch("/response/:id", responsesController.patchResponse);
router.delete("/response/:id", responsesController.deleteResponse);

module.exports = router;