const users_controllers = require ('./controllers/users_controllers')
const commentaire_controllers = require('./controllers/commentaire_controllers')
const movie_controllers = require('./controllers/movie_controllers')
const express = require('express')
const router = express.Router();

// uses controllers
// controllers du movie
/**
 * @openapi
 * /create_movie:
 *   post:
 *     summary: Create a new movie
 *     description: Adds a new movie to the database.
 *     responses:
 *       201:
 *         description: Movie created successfully
 *       400:
 *         description: Error creating movie
 */
router.post('/create_movie',movie_controllers.CreateMovie)
/**
 * @openapi
 * /GetAllMovie:
 *   get:
 *     summary: Get all movies
 *     description: Retrieves a list of all movies from the database.
 *     responses:
 *       200:
 *         description: A list of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The movie ID
 *                   title:
 *                     type: string
 *                     description: The movie title
 */
router.get('/GetAllMovie',movie_controllers.GetAllMovie)

/**
 * @openapi
 * /GetMovieById/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     description: Retrieves a movie by its ID from the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the movie
 *     responses:
 *       200:
 *         description: Movie found
 *       404:
 *         description: Movie not found
 */
router.get('/GetMovieById/:id',movie_controllers.GetMovieById)

/**
 * @openapi
 * /UpdateMovie/{id}:
 *   put:
 *     summary: Update a movie
 *     description: Updates movie details in the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the movie to update
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *       404:
 *         description: Movie not found
 */
router.put('/UpdateMovie/:id',movie_controllers.PutMovie)
/**
 * @openapi
 * /DeleteMovie/{id}:
 *   delete:
 *     summary: Delete a movie
 *     description: Removes a movie from the database by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the movie to delete
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 */
router.delete('/DeleteMovie/:id',movie_controllers.DeleteMovie)
// controllers du commentaire

/**
 * @openapi
 * /create_commentaire:
 *   post:
 *     summary: Create a new commentaire
 *     description: Adds a new commentaire to a specific movie in the database.
 *     responses:
 *       201:
 *         description: Commentaire created successfully
 *       400:
 *         description: Error creating commentaire
 */
router.post('/create_commentaire',commentaire_controllers.CreateCommentaire)

/**
 * @openapi
 * /GetAllCommentaire:
 *   get:
 *     summary: Get all commentaires
 *     description: Retrieves a list of all commentaires from the database.
 *     responses:
 *       200:
 *         description: A list of commentaires
 */
router.get('/GetAllCommentaire',commentaire_controllers.GetAllCommentaire)

/**
 * @openapi
 * /GetCommentaireByid/{id}:
 *   get:
 *     summary: Get a commentaire by ID
 *     description: Retrieves a commentaire by its ID from the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the commentaire
 *     responses:
 *       200:
 *         description: Commentaire found
 *       404:
 *         description: Commentaire not found
 */
router.get('/GetCommentaireByid/:id',commentaire_controllers.GetCommentaireById)
/**
 * @openapi
 * /GetCommentaireByIdMovie/{id_movie}:
 *   get:
 *     summary: Get a commentaire by IDMovie
 *     description: Retrieves a commentaire by its IDMOvie from the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the commentaire
 *     responses:
 *       200:
 *         description: Commentaire found
 *       404:
 *         description: Commentaire not found
 */
router.get('GetCommentaireByIdMovie/:id_movie',commentaire_controllers.GetCommentaireByIdMovie)
/**
 * @openapi
 * /UpdateCommentaire/{id}:
 *   put:
 *     summary: Update a commentaire
 *     description: Updates the details of an existing commentaire.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the commentaire to update
 *     responses:
 *       200:
 *         description: Commentaire updated successfully
 *       404:
 *         description: Commentaire not found
 */
router.put('/UpdateCommentaire/:id',commentaire_controllers.PutCommentaire)
/**
 * @openapi
 * /DeleteCommentaire/{id}:
 *   delete:
 *     summary: Delete a commentaire
 *     description: Deletes a commentaire by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the commentaire to delete
 *     responses:
 *       200:
 *         description: Commentaire deleted successfully
 *       404:
 *         description: Commentaire not found
 */
router.delete('/DeleteCommentaire/:id',commentaire_controllers.DeleteCommentaire)

// user router

/**
 * @openapi
 * /createusers:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user account in the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username for the new account
 *               password:
 *                 type: string
 *                 description: The password for the new account
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Error creating user
 */
router.post('/createusers',users_controllers.CreateUsers)
/**
 * @openapi
 * /AuthUsers:
 *   post:
 *     summary: Authenticate a user
 *     description: Authenticates a user and returns a token on successful login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *     responses:
 *       200:
 *         description: Authentication successful, token returned
 *       401:
 *         description: Authentication failed, invalid username or password
 */
router.post('/AuthUsers',users_controllers.login)

module.exports = router ;
