const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./path/to/your/route/file');

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(userRoutes); // Use the user routes
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Example product array for storage (In a real-world app, use a database)
let products = [];

// Example Node.js/Express route
app.post('/api/products/add', async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;
    const newProduct = new Product({ name, price, description, image, category });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
});


// Sign-up route
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password before saving (if using bcrypt)
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});


// POST route for user login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    // Replace with your user model
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) { // Assume comparePassword is a method to verify password
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    
    // Generate a token or session here (if needed)
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});


// Start server
app.listen(5000, () => {
  console.log('Backend server running on port 5000');
});

