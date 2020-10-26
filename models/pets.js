const fs = require("fs");

const createPet = (ownerId, data, cb) => {};

const fetchPetById = (id, cb) => {
  let petArr = [];
  fs.readFile(`./data/pets/${id}.json`, "utf8", function (error, petString) {
    petArr.push(JSON.parse(petString));
    if (error) cb(error);
    else {
      cb(null, petArr);
    }
  });
};

const fetchPetsByOwnerId = (ownerId, cb) => {
  let petArr = [];
  let responseCount = 0;
  fs.readdir("./data/pets", function (error, pets) {
    pets.forEach((pet) => {
      fs.readFile(`./data/pets/${pet}`, "utf8", function (error, petString) {
        responseCount++;
        let newPetString = JSON.parse(petString);
        if (ownerId === newPetString.owner) {
          petArr.push(newPetString);
        }
        if (responseCount === pets.length) {
          cb(null, petArr);
        }
      });
    });
  });
};

const deletePetById = (id, cb) => {};

module.exports = {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById,
};
