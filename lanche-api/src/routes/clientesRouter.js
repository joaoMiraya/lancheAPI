const express = require('express');
const router = express.Router()


const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.list);
router.get('/:id', clientesController.findById);
router.get('/check-email/:email', clientesController.findByEmail);
router.post('/', clientesController.create);
router.put('/:id', clientesController.update);
router.delete('/:id', clientesController.delete);


module.exports = router;