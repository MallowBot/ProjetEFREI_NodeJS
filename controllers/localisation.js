module.exports = (app) => {
    const Localisation = app.models.Localisation;

    function addLocalisation(req, res) {
        let newLocalisation = new Localisation ({
            ville: req.body.ville,
            postalCode: req.body.postalCode,
            region: req.body.region,
            pays : req.body.pays,
        })

        res.send(newLocalisation)
        newLocalisation.save()
    };

    function localisationRemove(req, res){ // Remove une localisation er grâce à son ID
        let getId = req.body._id;
        Localisation.findByIdAndRemove(getId, function(err, docs) {res.send("La localisation  " +docs+ "  a bien été supprimé")})
    }

    function localisationUpdate(req,res) { // Update un user grace à son ID
        let getid = req.body._id;
        let update_ville = req.body.ville
        let update_postalCode = req.body.postalCode;
        let update_region = req.body.region
        let update_pays = req.body.pays;
        Localisation.findByIdAndUpdate(getid, {ville: update_ville, postalCode: update_postalCode, region: update_region, pays: update_pays}, function(err, docs) {})
        Localisation.findById(getid, function (err, docs) {res.send("La localisation à bien été remplacée dans la base :"+docs+"")})
    //{t != d};
    }

return {addLocalisation, localisationRemove, localisationUpdate}
};