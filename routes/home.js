const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("home", { title: "Fibonacci Calculator"} );
});

router.get("/error", (req, res, next) => {
    next({
        status: 404,
        message: "Fake error"
    });
});

module.exports = router;