const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    swagger: '2.0',
    info: {
      title: 'Desafio Programação Fullstack API',
      version: '1.0.0',
    },
    basePath: '/',
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
const Creator = require('./controllers/creator.controller');
const app = express();

app.use(express.json());
app.get('/creator', Creator.getAll);
app.get('/creator/:id', Creator.getById);
app.post('/creator', Creator.createCreator);
app.put('/creator/:id', Creator.updateCreator);
app.delete('/creator/:id', Creator.deleteCreator);

module.exports = app;