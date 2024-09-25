import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';

function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    alert(`${product.name} has been added to your cart!`);
  };

  const buyNow = (product) => {
    alert(`You are buying ${product.name} now!`);
  };

  const toggleFavorite = (product) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(product._id)) {
      newFavorites.delete(product._id);
    } else {
      newFavorites.add(product._id);
    }
    setFavorites(newFavorites);
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="product-page">
      <h2 className="page-title">Our Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      {error && <p className="error-message">{error}</p>}
      <div className="product-grid">
        {filteredProducts.length === 0 && !error ? (
          <p>No products available.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product._id} className="product-card">
              <div
                className="heart-icon"
                onClick={() => toggleFavorite(product)}
                role="button"
                aria-label={favorites.has(product._id) ? 'Remove from favorites' : 'Add to favorites'}
              >
                <FaHeart
                  color={favorites.has(product._id) ? 'red' : 'grey'}
                  size={24}
                />
              </div>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <div className="button-container">
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
                <button
                  className="buy-now-button"
                  onClick={() => buyNow(product)}
                  aria-label={`Buy ${product.name} now`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductPage;
