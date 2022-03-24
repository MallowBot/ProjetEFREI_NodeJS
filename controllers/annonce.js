const res = require("express/lib/response");

module.exports = (app) => {
    const Annonce = app.models.Annonce;
    //const Localisation = app.models.Localisation;

    function addAnnonce(req, res) {
        let newAnnonce = new Annonce ({
            id_user: req.body.id_user,
            id_localisation: req.body.id_localisation,
            titre: req.body.titre,
            prix: req.body.prix,
            date_heure: req.body.date_heure,
            description: req.body.description,
            type : req.body.type,
            categorie : req.body.categorie
        })

        res.send(newAnnonce)
        newAnnonce.save()
    };

    function getAllAnnonce(req, res){
        Annonce.find({}, function (err, docs) {res.send(docs)}).populate("id_localisation")
    };

    function getByCategorie(req, res) {
        let findCategorie = req.body.categorie
        Annonce.find({"categorie": {$regex: findCategorie} }, function (err, docs) {res.send(docs)})
    };


    function getByLocalisation(req, res) {
        let findVille = req.body.ville;
        //Annonce.find({}, function (err, docs) {}).populate("id_localisation")
        Annonce.find({}, function (err, docs) {res.send(docs)}).populate({path:'id_localisation', match: { ville: { $gte: findVille }}, select:'ville'})
    };


    function annonceUpdate(req,res) { // Update une annonce grace à son ID
        let getid = req.body._id;
        let update_titre = req.body.titre;
        let update_prix = req.body.prix;
        let update_date = req.body.date;
        let update_description = req.body.description;
        let update_type = req.body.type;
        let update_categorie = req.body.categorie;
        Annonce.findByIdAndUpdate(getid, {titre : update_titre, prix: update_prix, date: update_date, description: update_description, type: update_type, categorie: update_categorie}, function(err, docs) {res.send(docs)})
    //{t != d};
    }
    
    //Remove Annonce
    function annonceRemove(req, res){ // Remove un annonce grace à son ID
        let getId = req.body._id;
        Annonce.findByIdAndRemove(getId, function(err, docs) {res.send(docs)})
    }

return{addAnnonce, getAllAnnonce, getByCategorie, getByLocalisation, annonceUpdate, annonceRemove}
};