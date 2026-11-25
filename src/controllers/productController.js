const Product = require('../models/Product');

async function listar(req, res) {
  try {
    const produtos = await Product.find().sort({ createdAt: -1 });
    res.json(produtos);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao listar os produtos.' });
  }
}

async function listarFavoritos(req, res) {
  try {
    const produtos = await Product.find({ favorite: true }).sort({ updatedAt: -1 });
    res.json(produtos);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao listar os favoritos.' });
  }
}

async function buscarPorId(req, res) {
  try {
    const produto = await Product.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado.' });
    }
    res.json(produto);
  } catch (erro) {
    res.status(400).json({ erro: 'Id inválido.' });
  }
}

async function buscarPorCodigo(req, res) {
  try {
    const produto = await Product.findOne({ barcode: req.params.barcode });
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado.' });
    }
    res.json(produto);
  } catch (erro) {
    res.status(400).json({ erro: 'Codigo de barras invalido.' });
  }
}

async function criar(req, res) {
  try {
    const produto = await Product.create(req.body);
    res.status(201).json(produto);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

async function atualizar(req, res) {
  try {
    const produto = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado.' });
    }
    res.json(produto);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

async function remover(req, res) {
  try {
    const produto = await Product.findByIdAndDelete(req.params.id);
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado.' });
    }
    res.json({ mensagem: 'Produto removido.' });
  } catch (erro) {
    res.status(400).json({ erro: 'Id inválido.' });
  }
}

module.exports = { listar, listarFavoritos, buscarPorId, buscarPorCodigo, criar, atualizar, remover };
