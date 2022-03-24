module.exports = (app) => {
  app.use("/user", require("./user")(app));
  app.use("/message", require("./message")(app));
  app.use("/localisation", require("./localisation")(app));
  app.use("/annonce", require("./annonce")(app));
};
