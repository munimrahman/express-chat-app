const createError = require("http-errors");

// 404 not found handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, "Your requested content not found."));
};

const errorHandler = (err, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  if (res.locals.html) {
    // html response
    res.render("error", { title: "Error Page" });
  } else {
    res.json(res.locals.error);
  }
};

module.exports = { notFoundHandler, errorHandler };
