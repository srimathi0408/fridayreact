const Product = require('./models/product'); // Import the product model

app.post('/api/products/add', async (req, res) => {
  const { name, price, description, image, category } = req.body;

  if (!name || !price || !description || !image || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new product instance
    const newProduct = new Product({
      name,
      price,
      description,
      image,
      category,
    });

    // Save the product to MongoDB
    await newProduct.save();

    // Respond with a success message
    res.status(201).json({ message: 'Product added successfully!', product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Error adding product' });
  }
});
