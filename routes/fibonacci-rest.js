const express = require("express");
const router = express.Router();
const http = require("http");

router.get("/", (req, res, next) => {
    const title = "Calculate Fibonacci numbers";
    const { fibonum } = req.query;

    if (fibonum) {
        if (fibonum >= 0) {
            const httpreq = http.request({
                host: "localhost",
                port: process.env.SERVERPORT,
                path: `/fibonacci/${Math.floor(fibonum)}`,
                method: "GET"
            });
            httpreq.on("response", (response) => {
                response.on("data", (chunk) => {
                    let data = JSON.parse(chunk);
                    res.render("fibonacci", {
                        title: title,
                        fibonum: fibonum,
                        fiboval: data.result
                    });
                });
                response.on("error", (err) => {
                    next(err);
                });
            });
            httpreq.on("error", (err) => {
                next(err);
            });
            httpreq.end();
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