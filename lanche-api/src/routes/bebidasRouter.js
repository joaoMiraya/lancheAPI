const express = require('express');
const router = express.Router()


const bebidasController = require('../controllers/bebidasController');

router.get('/', bebidasController.list);
router.get('/:id', bebidasController.findById);
router.post('/', bebidasController.create);
router.put('/:id', bebidasController.update);
router.delete('/:id', bebidasController.delete);


module.exports = router;