const express = require('express');
const router = express.Router()


const lanchesController = require('../controllers/lanchesController');

router.get('/', lanchesController.list);
router.get('/:id', lanchesController.findById);
router.get('/category/:categoria', lanchesController.findByCategory);
router.post('/', lanchesController.create);
router.put('/:id', lanchesController.update);
router.delete('/:id', lanchesController.delete);


module.exports = router;