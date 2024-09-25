import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function TypesOfHandicrafts() {
  const [favorites, setFavorites] = useState([]);

  const addToCart = (productName) => {
    alert(`${productName} has been added to your cart!`);
  };

  const buyNow = (productName) => {
    alert(`You are buying ${productName} now!`);
  };

  const toggleFavorite = (productName) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productName)
        ? prevFavorites.filter((fav) => fav !== productName)
        : [...prevFavorites, productName]
    );
  };

  return (
    <div className="category-page">
      <h2 className="page-title">Types of Handicrafts</h2>
      <div className="product-grid">
        {[
          { name: 'APPLE DESIGN', image: 'https://i.pinimg.com/736x/1b/0b/2a/1b0b2a53699cf85b44b000aba5d87817.jpg' },
          { name: 'CORAL DESIGN', image: 'https://feelfreestuff.wordpress.com/wp-content/uploads/2021/05/h3-1.jpg?w=600&h=900' },
          { name: 'GEOMETRIC DESIGN', image: 'https://i.pinimg.com/736x/62/c7/df/62c7dfc028a2ee861678819021d923c2.jpg' },
          { name: 'NATURE DESIGN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9hKX6WEyyGyxJdBx8KjcU2qsCM_xepnZeIHR4yyONPIRo1eX6O9eysd6kYAO-GKU0UY&usqp=CAU' },
        ].map((product, index) => (
          <div key={index} className="product-card">
            <div className="heart-icon" onClick={() => toggleFavorite(product.name)}>
              <FaHeart
                color={favorites.includes(product.name) ? 'red' : 'grey'}
                size={24}
              />
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <div className="button-container">
              <button className="add-to-cart-button" onClick={() => addToCart(product.name)}>
                Add to Cart
              </button>
              <button className="buy-now-button" onClick={() => buyNow(product.name)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypesOfHandicrafts;
