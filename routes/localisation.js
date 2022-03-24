const router = require("express").Router();

module.exports = (app) => {

    router.post("/addLocalisation", app.controllers.localisation.addLocalisation);
    router.post("/removeLocalisation", app.controllers.localisation.localisationRemove);
    router.post("/updateLocalisation", app.controllers.localisation.localisationUpdate);
    return router;
}