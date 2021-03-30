var Userdb = require("../model/model");

// create and save new users
exports.create = (req, res) => {
  // validate a request
  if (!req.body) {
    res.status(400).send({ Message: "Content cannot be empty!" });
    return;
  }

  //   new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  })

//   Save user n the database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the create operation!"
            });
        });
};

// retrieve and return all users retrive and return a single userdb

exports.find = (req, res) => {};

// update a new identified user by user id
exports.update = (req, res) => {};

// delete a user with specified user id in the request
exports.delete = (req, res) => {};
