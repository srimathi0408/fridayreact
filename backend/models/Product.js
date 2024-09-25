const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  collection: 'products' // Explicitly set the collection name
});

// Define the model with the name 'Product'
const Product = mongoose.model('Product', productSchema); 

// Export the model as 'Product'
module.exports = Product;
