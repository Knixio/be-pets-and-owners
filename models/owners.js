const fs = require("fs");

const createOwner = (data, cb) => {
  fs.readdir('./data/owners', (error, owners) => {
    const newFileNo = owners.length + 1;
    data.id = `o${newFileNo}`;
    data.created = Date.now();
    fs.writeFile(`./data/owners/o${newFileNo}.json`, JSON.stringify(data, null, 2), function(error) {
      if(error) cb(error);
      else {
        cb(null, data)
      }
    })
  })

};

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
  fs.readFile(`./data/owners/${id}.json`, "utf8", function (
    error,
    ownerString
  ) {
    const owner = JSON.parse(ownerString);
    if (error) cb(error);
    else {
      cb(null, owner);
    }
  });
};

const updateOwner = (id, data, cb) => {
  fs.readFile(`./data/owners/${id}.json`, "utf8", function (error, owner) {
    let parsedOwner = JSON.parse(owner);
    console.log(parsedOwner);
    if (data.name) {
      parsedOwner.name = data.name;
    }
    if (data.age) {
      parsedOwner.age = data.age;
    }
    console.log(parsedOwner);

    fs.writeFile(
      `./data/owners/${id}.json`,
      JSON.stringify(parsedOwner),
      function (error) {
        if (error) cb(error);
        else {
          cb(null, parsedOwner);
        }
      }
    );
  });
};

const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
};
