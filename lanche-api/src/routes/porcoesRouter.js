const express = require('express');
const router = express.Router()


const porcoesController = require('../controllers/porcoesController');

router.get('/', porcoesController.list);
router.get('/:id', porcoesController.findById);
router.post('/', porcoesController.create);
router.put('/:id', porcoesController.update);
router.delete('/:id', porcoesController.delete);


module.exports = router;