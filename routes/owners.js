var express = require('express');
var router = express.Router();
const owners = require('../actions/owner.actions');
const schemas = require('../models/ownerSchema');
const middleware = require('../middleware');
/* GET users listing. */

//create owner
router.post('/add',middleware(schemas.ownerSchema),owners.create);

// Retrieve all Owner
router.get("/getAll", owners.findAll);

// Retrieve a single Owner with id
router.get("/get/:id", owners.findOne);

// Update a Owner with id
router.put("/update/:id", owners.update);

// Delete a Owner with id
router.delete("/delete/:id", owners.delete);

// Create a new Owner
router.delete("/deleteAll", owners.deleteAll);

router.get("/count", owners.count);
module.exports = router;
