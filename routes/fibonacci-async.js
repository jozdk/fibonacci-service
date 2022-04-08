const express = require("express");
const router = express.Router();
const math = require("../math");

router.get("/", (req, res, next) => {
    const title = "Calculate Fibonacci numbers";
    const { fibonum } = req.query;
    console.log(fibonum);
    
    if (fibonum) {
        math.fibonacciAsync(fibonum, (err, fiboval) => {
            if (err) next(err);
            else {
                res.render("fibonacci", {
                    title: title,
                    fibonum: fibonum,
                    fiboval: fiboval
                });
            }
        });
    } else {
        res.render("fibonacci", {
            title: title,
            fiboval: undefined
        });
    }
});

module.exports = router;