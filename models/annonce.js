const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let annonceSchema = new Schema({
    id_user: {type: Schema.Types.ObjectId,
        ref: 'User',
    },
    id_localisation: {type: Schema.Types.ObjectId,
        ref: 'Localisation',
    },
    titre: String,
    prix: Number,
    date: {type: Date, default:new Date()},
    description: String,
    type : {type: String, enum :['offre','demande']},
    categorie: { type: String, enum :['voiture','immobilier','multimedia','emploi','animaux']},
});

module.exports = mongoose.model("Annonce", annonceSchema);