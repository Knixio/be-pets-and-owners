const fs = require("fs");

const createOwner = (data, cb) => {};

const fetchAllOwners = (cb) => {
  let responseCount = 0;
  const ownersArr = [];
  fs.readdir("./data/owners", function (error, owners) {
    owners.forEach((owner) => {
      fs.readFile(`./data/owners/${owner}`, "utf8", function (error, owner) {
        ownersArr.push(JSON.parse(owner));
        responseCount++;
        if (responseCount === owners.length) {
          cb(null, ownersArr);
        }
      });
    });
  });
};

const fetchOwnerById = (id, cb) => {
  let ownerArr = [];
  fs.readFile(`./data/owners/${id}.json`, "utf8", function (
    error,
    ownerString
  ) {
    ownerArr.push(JSON.parse(ownerString));
    if (error) cb(error);
    else {
      cb(null, ownerArr);
    }
  });
};


const updateOwner = (id, data, cb) => {
  fs.readFile(`./data/owners/${id}.json`, function (error, owner) {
    console.log(owner)
  })
};

const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
};
