const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define product schema
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String
});

// Create model
const Product = mongoose.model('Product', ProductSchema);

// Add product route
app.post('/api/products/add', async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;
    if (!name || !price || !description || !image || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const product = new Product({ name, price, description, image, category });
    await product.save();
    res.status(201).json({ message: 'Product added successfully!', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
