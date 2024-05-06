const express =require('express');

const jsonwebtoken = require('jsonwebtoken');

const bodyParser = require('body-parser');

const cors =require('cors');

const app = express()

const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./swagger-docs')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(bodyParser.json())
app.use(cors());
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb+srv://jeaneudestchibozo:3sxf53ZQB5hHsMVw@cluster0.czb7bsq.mongodb.net/',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));


//insertion des route 
const route_api = require('./routes')

/**
 * @openapi
 * /users: n'importe qui 
 *   get:
 *     summary: Renvoie une liste d'utilisateurs
 *     responses:
 *       200:
 *         description: la premiers étape dans les routes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: L'ID de l'utilisateur
 *                   nom:
 *                     type: string
 *                     description: Le nom de l'utilisateur
 */
app.use('/api/tp_optimisation',route_api)
  module.exports = app;