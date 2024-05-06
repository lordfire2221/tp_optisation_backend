const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.1.0',  // Using OpenAPI 3.1.0
    info: {
      title: 'API pour mon application',
      version: '1.0.0',
      description: 'Ceci est une API simple pour démonstration',
    },
    servers: [
      {
        url: 'http://localhost:4000/api/tp_optimisation',
        description: 'Server du tp mongodb sur la réalisation d\'api',
      },
    ],
  },
  apis: ['./routes.js'],  // Ensure this path correctly points to your API route definitions
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;  // Corrected the export statement here
