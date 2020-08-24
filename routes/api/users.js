const express = require("express");
const router = express.Router();

const User = require('../../models/User');

// @route GET api/users
// @desc Get All Users
// @access Public
router.get('/', (req,res) => {
    User.find()
        .then(users => res.json(users))
});

module.exports = router;