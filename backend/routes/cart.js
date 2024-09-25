const express = require('express');
const router = express.Router();

// Cart Data (Replace with actual database interaction)
let cart = [];

// Add Product to Cart Route
router.post('/cart/add', (req, res) => {
  const { productId } = req.body;
  cart.push(productId); // In reality, this would be linked to the user
  res.json({ success: true, message: 'Product added to cart!' });
});

// View Cart Route
router.get('/cart/view', (req, res) => {
  res.json(cart);
});

module.exports = router;
