const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const commentaire_models = require('../models/commentaire_models');

exports.CreateCommentaire = function (req,res,next){
const data = req.body;
const commentaire = new Commentaire_Model ({
    users_id:data.users.id,
    movie_id:data.movie_id,
    nom:data.nom,
    prenom :data.prenom,
    jour_naissance:data.jour_naissance,
    date_inscription:data.date_inscription
})
commentaire.save().then(
    res.send({'status':200,'message':'Ce commentaire à été créer'})
 ).cath((error) =>{
     res.send({'status':500,'message':  error}) 
 })
}

exports.GetAllCommentaire = function (req,res,next){
 const AllCommentaire = Commentaire_Model
 AllCommentaire.find().then(
    (response) =>{
        res.send({'status':200,'message':response})
       }
     ).cath(
         (error)=>{
             res.send({'status':500,'message':error})
         }
     )
}

exports.GetCommentaireById = function (req,res,next){
    const Commentaire = Commentaire_Model
    const id = req.params.id
    Commentaire.findById(id).then(
        (response) =>{
            res.send({'status':200,'message':response})
           }
         ).cath(
             (error)=>{
                 res.send({'status':500,'message':error})
             }
         )
}

exports.GetCommentaireByIdMovie = function (req,res,next){
    const Commentaire = Commentaire_Model
    const id_movie = req.params.id_movie
    Commentaire.findByOne({movie_id:id_movie}).then(
        (response) =>{
            res.send({'status':200,'message':response})
           }
         ).cath(
             (error)=>{
                 res.send({'status':500,'message':error})
             }
         )
}

exports.PutCommentaire = function (req,res,next){
 const id = req.params.id
 const commentaire = new Commentaire_Model ({
    users_id:data.users.id,
    movie_id:data.movie_id,
    nom:data.nom,
    prenom :data.prenom,
    jour_naissance:data.jour_naissance,
    date_inscription:data.date_inscription
})
Commentaire_Model.update({_id:id}, commentaire).then(
    (reponse) =>{
        res.send({'status':200,'message':'modification effectuée'})
    }
 ).cath(
    (error)=>{
        res.send({'status':501,'message':error})
    }
 )
}

exports.DeleteCommentaire = function (req,res,next){
    const id = req.params.id
    Commentaire_Model.findByIdAndDelete(id).then(
        (repsonse) =>{
           res.send({'status':200,'message':'Suppression éffectuer avec succès'})
        }
       ).cath(
           (error) =>{
               res.send({'status':500,'message':  error}) 
           }  
       )
}

