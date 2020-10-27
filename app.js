const express = require("express");
const app = express();
const apiRouter = require('./Routes/api-router');

app.use('/api', apiRouter)

module.exports = app;























// OLD 

// const { getAllOwners, getOwnerById } = require("./controllers/owners.js");
// const { getPetsByOwnerId, getPetById } = require("./controllers/pets.js");

// app.get("/api/owners", getAllOwners);

// app.get(`/api/owners/:ownerId`, getOwnerById);

// app.get("/api/owners/:ownerId/pets", getPetsByOwnerId);

// app.get("/api/pets/:id", getPetById);
