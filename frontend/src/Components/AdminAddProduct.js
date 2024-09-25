import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('handicraft');
  const [errorMessage, setErrorMessage] = useState(''); // New state for error handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/products/add', {
        name,
        price,
        description,
        image,
        category
      }, { withCredentials: true });
  
      alert('Product added successfully!');
      // Reset form fields
      setName('');
      setPrice('');
      setDescription('');
      setImage('');
      setCategory('handicraft');
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        alert(`Error adding product: ${error.response.data.message}`);
      } else if (error.request) {
        // Request was made but no response was received
        alert('No response from server');
      } else {
        // Something else happened while setting up the request
        alert(`Error adding product: ${error.message}`);
      }
    }
  };
  

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2>Add Product</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              required
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
              required
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="handicraft">Handicraft</option>
              <option value="home-decor">Home Decor</option>
              <option value="statue">Statues and Sculptures</option>
              <option value="product">Products</option>
            </select>
          </div>
          <button className="submit-btn" type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
