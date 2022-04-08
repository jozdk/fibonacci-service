const express = require("express");
const router = express.Router();
const math = require("../math.js");

router.get("/", (req, res, next) => {
    const title = "Calculate Fibonacci numbers"
    const { fibonum } = req.query; // Like this?
    console.log(fibonum);
    console.log(req.query.fibonum);
    // const fibonum = req.query.fibonum;
    // const fibilibus = 2;
    // console.log("fibonum: ", fibonum);
    // console.log("{fibonum, fibilibus}: ", {fibonum, fibilibus});
    if (req.query.fibonum) {
        if (req.query.fibonum >= 0) {

            res.render("fibonacci", {
                title: title,
                fibonum: req.query.fibonum, // is this dangerous?
                fiboval: math.fibonacci(req.query.fibonum)
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