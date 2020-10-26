const {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById,
} = require("../models/pets.js");

function getPetsByOwnerId(request, response) {
  const id = request.params.ownerId;
  console.log(request.params, "this should only be owner id");
  fetchPetsByOwnerId(id, function (error, pet) {
    response.status(200).send({ pet });
  });
}

function getPetById(request, response) {
  const id = request.params.id;
  fetchPetById(id, function (error, pet) {
    response.status(200).send({ pet });
  });
}

module.exports = { getPetsByOwnerId, getPetById };
