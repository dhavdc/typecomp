const express = require("express");

const router = express.Router();

// Display the dashboard page
router.get("/", (req, res) => {
    res.render('dashboard', {navbarSelected: 3});
});

module.exports = router;