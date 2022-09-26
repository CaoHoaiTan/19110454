const express = require('express');
const { getHTML, getAll } = require('../controllers/MyGroupController');
const router = express.Router();


router.get('/:id', getHTML);
router.get('/', getAll);

module.exports = router