const logger = (req, res, next) => {
    // Log only if in dev mode
    if (req.app.get("env") === "development") {
        console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
    }
    next();
}

module.exports = logger;