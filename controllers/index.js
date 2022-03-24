module.exports = (app) => {
    app.controllers = {
        user: require("./user")(app),
        message: require("./message")(app),
        localisation: require("./localisation")(app),
        annonce: require("./annonce")(app),
    };
};