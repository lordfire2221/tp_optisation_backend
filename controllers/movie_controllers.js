const movie_model = require ('../models/movie_models')
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');

exports.CreateMovie = function (req,res,next){
const data = req.body;
const movie = new movie_model ({
    type_film:data.type_film,
    nom:data.nom,
    description_film : data.description_film,
    jour_sortie:data.jour_sortie,
    production:data.production,
})
movie.save().then(
    res.send({'status':200,'message':'Ce movie à été créer'})
 ).cath((error) =>{
     res.send({'status':500,'message':  error}) 
 })
}

exports.GetAllMovie = function (req,res,next){
 const AllMovie = movie_model
 AllMovie.find().then(
    (response) =>{
        res.send({'status':200,'message':response})
       }
     ).cath(
         (error)=>{
             res.send({'status':500,'message':error})
         }
     )
}

exports.GetMovieById = function (req,res,next){
    const movie = movie_model
    const id = req.params.id
    movie.findById(id).then(
        (response) =>{
            res.send({'status':200,'message':response})
           }
         ).cath(
             (error)=>{
                 res.send({'status':500,'message':error})
             }
         )
}

exports.PutMovie = function (req,res,next){
 const id = req.params.id
 const movie = new movie_model ({
    users_id:data.users.id,
    nom:data.nom,
    prenom :data.prenom,
    jour_naissance:data.jour_naissance,
    date_inscription:data.date_inscription
})
movie_model.update({_id:id}, movie).then(
    (reponse) =>{
        res.send({'status':200,'message':'modification effectuée'})
    }
 ).cath(
    (error)=>{
        res.send({'status':501,'message':error})
    }
 )
}

exports.DeleteMovie = function (req,res,next){
    const id = req.params.id
    movie_model.findByIdAndDelete(id).then(
        (repsonse) =>{
           res.send({'status':200,'message':'Suppression éffectuer avec succès'})
        }
       ).cath(
           (error) =>{
               res.send({'status':500,'message':  error}) 
           }  
       )
}

