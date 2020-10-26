const express = require("express");
const app = express();

const { getAllOwners, getOwnerById } = require("./controllers/owners.js");
const { getPetsByOwnerId, getPetById } = require("./controllers/pets.js");

app.get("/api/owners", function (request, response) {
  getAllOwners(request, response);
});

app.get(`/api/owners/:ownerId`, function (request, response) {
  getOwnerById(request, response);
});

app.get("/api/owners/:ownerId/pets", function (request, response) {
  getPetsByOwnerId(request, response);
});

app.get("/api/pets/:id", function (request, response) {
  getPetById(request, response);
});

module.exports = app;
