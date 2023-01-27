const express = require("express");
const { getLogin } = require("../controllers/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtmlResponse("Log In"), getLogin);

module.exports = router;
