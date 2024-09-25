import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function HomeDecor() {
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
      <h2 className="page-title">Home Decor</h2>
      <div className="product-grid">
        {[{
          name: 'TREE DESIGN',
          image: 'https://cdn.exoticindia.com/images/products/original/homeandliving/miw189.jpg',
        }, {
          name: 'DREAM CAPTURE DESIGN',
          image: 'https://i.pinimg.com/736x/8d/25/ab/8d25abe45c1e5a4c5120fe2ae9e726c3.jpg',
        }, {
          name: 'BENCH DESIGN',
          image: 'https://i.pinimg.com/736x/50/84/08/5084081b58f1c58d2ad793e18b9047b5.jpg',
        }, {
          name: 'BULB DESIGN',
          image: 'https://t3.ftcdn.net/jpg/05/70/05/56/360_F_570055607_08SLfQgTMYiDKIIEqSn9qLzjnBzSxCKI.webp',
        }].map((product, index) => (
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

export default HomeDecor;
