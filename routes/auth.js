const express = require("express");
const router = express.Router();

// @route GET api/auth
// @desc Get loged in user
// @access private

router.get("/", (req, res) => {
  res.send("get request to the homepage");
});

// @route POST api/auth
// @desc Auth user & get token
// @access public

router.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

module.exports = router;
