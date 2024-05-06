const users_controllers = require ('./controllers/users_controllers')
const commentaire_controllers = require('./controllers/commentaire_controllers')
const movie_controllers = require('./controllers/movie_controllers')
const express = require('express')
const router = express.Router();

// uses controllers
// controllers du movie
router.post('/create_movie',movie_controllers.CreateMovie)
router.get('/GetAllMovie',movie_controllers.GetAllMovie)
router.get('/GetMovieById/:id',movie_controllers.GetMovieById)
router.put('/UpdateMovie/:id',movie_controllers.PutMovie)
router.delete('/DeleteMovie/:id',movie_controllers.DeleteMovie)
// controllers du commentaire
router.post('/create_commentaire',commentaire_controllers.CreateCommentaire)
router.get('/GetAllCommentaire',commentaire_controllers.GetAllCommentaire)
router.get('/GetCommentaireByid/:id',commentaire_controllers.GetCommentaireById)
router.get('GetCommentaireByIdMovie/:id_movie',commentaire_controllers.GetCommentaireByIdMovie)
router.put('/UpdateCommentaire/:id',commentaire_controllers.PutCommentaire)
router.delete('/DeleteCommentaire/:id',commentaire_controllers.DeleteCommentaire)



