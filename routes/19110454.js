const express = require('express');
const { getMember, addMember } = require('../controllers/MyGroupController');
const router = express.Router();


router.get('/:id', getMember);
router.post('/:id', addMember);

module.exports = router