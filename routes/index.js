const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.locals.pageData = {
    title: "Arisa  Pr.",
  };
  res.render("pages/index");
  
});

module.exports = router;
