const { getPetById } = require('../controllers/pets');

const petsRouter = require('express').Router();

petsRouter.get('/:id', getPetById)

module.exports = petsRouter;