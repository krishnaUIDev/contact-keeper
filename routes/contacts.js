const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc Get all users contacts
// @access private

router.get("/", (req, res) => {
  res.send("get all to the homepage");
});

// @route POST api/contacts
// @desc Add new contact
// @access public

router.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

// @route Put api/contacts
// @desc update contact
// @access public

router.put("/:id", (req, res) => {
  res.send("put request to the homepage");
});

// @route Delete api/contacts
// @desc delete contact
// @access public

router.delete("/:id", (req, res) => {
  res.send("delete request to the homepage");
});

module.exports = router;
