const router = require("express").Router();

module.exports = (app) => {

    router.post("/addAnnonce", app.controllers.annonce.addAnnonce);
    router.get("/getAllAnnonce",app.controllers.annonce.getAllAnnonce);
    router.post("/getByCategorie", app.controllers.annonce.getByCategorie);
    router.post("/getByLocalisation", app.controllers.annonce.getByLocalisation);
    router.post("/annonceUpdate", app.controllers.annonce.annonceUpdate);
    router.post("/annonceRemove", app.controllers.annonce.annonceRemove);
    
    return router;
};
