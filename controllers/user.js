const jwt = require('jsonwebtoken');
module.exports = (app) => {
    const User = app.models.User;

    function addUser(req,res) {
        let newUser = new User ({
            nom: req.body.nom,
            prenom: req.body.prenom,
            addresse: req.body.addresse,
            mail: req.body.mail,
            password: req.body.password,
            age: req.body.age,
            phone: req.body.phone  
        })

        res.send(newUser)
        newUser.save()
    }

    function getAll(req, res) { // Afficher tout les Users
        User.find({}, function (err, docs) {res.send(docs)})
    }

    function getById(req, res){ // Rechercher un user garce à son ID
        let getid = req.body._id;
        User.findById(getid, function (err, docs) {res.send(docs)})
    }
    
    function userUpdate(req,res) { // Update un user grace à son ID
        let getid = req.body._id;
        let update_nom = req.body.nom;
        let update_prenom = req.body.prenom;
        let update_addresse = req.body.addresse;
        let update_mail = req.body.mail;
        let update_password = req.body.password;
        let update_age = req.body.age;
        let update_phone = req.body.phone;
        User.findByIdAndUpdate(getid, {nom: update_nom, prenom: update_prenom, addresse: update_addresse, mail: update_mail, password: update_password, age: update_age, phone: update_phone}, function(err, docs) {res.send(docs)})
    //{t != d};
    }
    
    function userConn(req, res) {
        let password = req.body.password
    }

    function remove(req, res){ // Remove un user grace à son ID
        let getId = req.body._id;
        User.findByIdAndRemove(getId, function(err, docs) {res.send("La localisation  " +docs+ "  a bien été supprimé")})
    }

    
    return{addUser, getAll, getById, userUpdate, remove}
};  