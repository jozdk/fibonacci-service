const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const indexRouter = require("./routes/home.js");

const app = express();

// Set application properties
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Mount middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/fibonacci", fibonacciRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`))