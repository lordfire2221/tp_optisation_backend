const mongoose = require('mongoose')

const Movie = new mongoose.Schema({
    type_film:{type:String, required:true,unique:true},
    nom:{type:String,required:true},
    description_film :{type:String,required:true},
    jour_sortie:{type:String,required:true},
    production:{type:String,required:true},
})

module.exports =mongoose.model('Movie_collections',Movie)