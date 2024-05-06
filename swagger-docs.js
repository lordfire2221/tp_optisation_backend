const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API pour mon application',
      version: '1.0.0',
      description: 'Ceci est une API simple pour démonstration',
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Server du tp mongodb sur la réalisation d\'api',
      },
    ],
  },
  apis: ['./routes.js'],
};

const swaggerSpec = swaggerJsdoc(options);

exports.module = swaggerSpec;