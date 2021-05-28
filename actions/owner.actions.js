const db = require("../models"); 
const Owner = db.owners;
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const owner = {
    name: req.body.name,
    mob_no: req.body.mob_no,
    email: req.body.email ? req.body.email : false
  };

  // Save Tutorial in the database
  Owner.create(owner)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Owner."
      });
    });
};


//Retrive all owners
exports.findAll = (req, res) => {
  const name = req.query.name;
  //var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Owner.findAll({  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving owner."
      });
    });
};


//To find a single Owner with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Owner.findByPk(id)
    .then(data => {
      if(data){
        res.send(data)
      }
      else{
        res.send({
          message: "No Owner with id=" + id
        });
      };
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Owner with id=" + id
      });
    });
};

//To update a Owner identified by its id
exports.update = (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  Owner.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Owner was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Owner with id=${id}. Maybe Owner was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Owner with id=" + id
      });
    });
};

//To delete a Owner with a specific id
exports.delete = (req, res) => {
  const id = req.params.id;

  Owner.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Owner was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Owner with id=${id}. Maybe Owner was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Owner with id=" + id
      });
    });
};

// /To delete all Tutorials from an existing database
exports.deleteAll = (req, res) => {
  Owner.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Owner were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};


exports.count = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;

  Owner.count({ where: {id: id, name:name} }).then(count => {
    if(count) res.send({count : count})
    else res.send({count : count})
  }).catch(err => {
    res.status(500).send({
      message: "Error retrieving Owner with id="
    });
  })

};