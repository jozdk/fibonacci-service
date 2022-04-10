const express = require("express");
const router = express.Router();
const math = require("../math.js");

router.get("/", (req, res, next) => {
    const title = "Calculate Fibonacci numbers"
    const { fibonum } = req.query;
    if (fibonum) {
        if (fibonum >= 0) {
            res.render("fibonacci", {
                title: title,
                fibonum: fibonum,
                fiboval: math.fibonacci(fibonum)
            });
        } else {
            res.render("fibonacci", {
                title: title,
                inputError: true
            });
        }
    } else {
        res.render("fibonacci", {
            title: title,
            fiboval: undefined
        });
    }
});

module.exports = router;