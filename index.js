const express = require("express");
const path = require("path");
const myLogger = require("./middleware/logger.js");
// const logger = require("morgan");
// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { engine } = require("express-handlebars");

const indexRouter = require("./routes/home.js");
// const fibonacciRouter = require("./routes/fibonacci.js");
const fibonacciRouter = require("./routes/fibonacci-async.js");


const app = express();

// Set view engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Mount middleware
app.use(myLogger);
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/fibonacci", fibonacciRouter);

// Custom middleware: Catch 404 and forward it to error handler
// Needs to be mounted last in the middleware pipeline: if the request passes through until here -> handle as error 404
app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`))