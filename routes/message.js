const router = require("express").Router();

module.exports = (app) => {

    router.post("/addMessage", app.controllers.message.addMessage);
    router.post("/getTextById", app.controllers.message.getTextById);

    return router;
    
}