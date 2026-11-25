const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    barcode: {
      type: String,
      required: [true, 'barcode é obrigatório'],
      match: [/^\d{8,14}$/, 'barcode deve ter entre 8 e 14 dígitos'],
      unique: true,
      trim: true,
    },
    name: { type: String, trim: true, default: 'Produto sem nome' },
    brand: { type: String, default: '' },
    quantity: { type: String, default: '' },
    imageUrl: { type: String, default: '' },
    nutriScore: {
      type: String,
      enum: ['a', 'b', 'c', 'd', 'e', 'unknown'],
      default: 'unknown',
    },
    novaGroup: { type: Number, min: 1, max: 4, default: null },
    nutriments: {
      calories: { type: Number, default: null },
      carbohydrates: { type: Number, default: null },
      sugars: { type: Number, default: null },
      fat: { type: Number, default: null },
      saturatedFat: { type: Number, default: null },
      proteins: { type: Number, default: null },
      fiber: { type: Number, default: null },
      salt: { type: Number, default: null },
    },
    ingredients: { type: String, default: '' },
    allergens: { type: [String], default: [] },
    note: { type: String, maxlength: 280, default: '' },
    rating: { type: Number, min: 1, max: 5, default: null },
    favorite: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Product', productSchema);