const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.listar);
router.get('/:id', productController.buscarPorId);
router.post('/', productController.criar);
router.put('/:id', productController.atualizar);
router.delete('/:id', productController.remover);

module.exports = router;