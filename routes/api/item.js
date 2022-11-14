const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/Item');

// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);

module.exports = router;