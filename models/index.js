const express = require("express");
const app = express();

module.exports = (app) =>{
    app.models = {
        User: require('./user.js'),
        Message: require('./message.js'),
        Localisation: require('./localisation.js'),
        Annonce: require('./annonce.js'),
    };
};