const express = require('express');
const router = express.Router()


const pizzasController = require('../controllers/pizzasController');

router.get('/', pizzasController.list);
router.get('/:id', pizzasController.findById);
router.post('/', pizzasController.create);
router.put('/:id', pizzasController.update);
router.delete('/:id', pizzasController.delete);


module.exports = router;