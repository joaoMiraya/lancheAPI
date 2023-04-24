const express = require('express');
const router = express.Router()


const acrescimoController = require('../controllers/acrescimosController');

router.get('/', acrescimoController.list);
router.get('/:id', acrescimoController.findById);
router.post('/', acrescimoController.create);
router.put('/:id', acrescimoController.update);
router.delete('/:id', acrescimoController.delete);


module.exports = router;