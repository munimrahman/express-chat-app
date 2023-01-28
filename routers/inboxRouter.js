const express = require("express");
const { getInbox } = require("../controllers/inboxController");
const { checkLogin } = require("../middlewares/common/checkLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
