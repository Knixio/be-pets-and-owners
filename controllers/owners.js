const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
} = require("../models/owners.js");

function patchUpdateOwner(request, response) {
  updateOwner()
response.status(200);

//send to show the update????
}

function getAllOwners(request, response) {
  fetchAllOwners(function (error, owners) {
    response.status(200).send({ owners });
  });
}

function getOwnerById(request, response) {
  const id = request.params.ownerId;
  fetchOwnerById(id, function (error, owner) {
    response.status(200).send({ owner });
  });
}

module.exports = { getAllOwners, getOwnerById };
