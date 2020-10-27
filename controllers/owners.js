const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
} = require("../models/owners.js");

function patchUpdateOwner(request, response) {
  const id = request.params.ownerId;
  const data = request.body;
  console.log(data, "<---- data");
  updateOwner(id, data, function (error, owner) {
    response.status(200).send({ owner });
  });
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

module.exports = { getAllOwners, getOwnerById, patchUpdateOwner };
