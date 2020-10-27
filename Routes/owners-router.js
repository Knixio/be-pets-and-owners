const {
  getAllOwners,
  getOwnerById,
  patchUpdateOwner,
} = require("../controllers/owners");
const { getPetsByOwnerId } = require("../controllers/pets");

const ownersRouter = require("express").Router();

ownersRouter.patch("/:ownerId", patchUpdateOwner);

ownersRouter.get("/", getAllOwners);

ownersRouter.get("/:ownerId", getOwnerById);

ownersRouter.get("/:ownerId/pets", getPetsByOwnerId);

module.exports = ownersRouter;
