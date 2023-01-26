const getLogin = (req, res, next) => {
  res.render("index", {
    title: "Log In Page",
  });
};

module.exports = { getLogin };
