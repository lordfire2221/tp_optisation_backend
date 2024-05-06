const mongoose = require('mongoose')

const Commentaire = new mongoose.Schema({
    users_id:{type:mongoose.Schema.ObjectId ,required:true,unique:true},
    movie_id:{type:mongoose.Schema.ObjectId ,required:true,unique:true},
    nom:{type:String,required:true},
    prenom :{type:String,required:true},
    jour_naissance:{type:String,required:true},
    date_inscription:{type:String,required:true},
})

module.exports =mongoose.model('Commentaire_Model',Commentaire)