import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function StatuesAndSculptures() {
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
      <h2 className="page-title">Statues and Sculptures</h2>
      <div className="product-grid">
        {[{
          name: 'DRAGON STATUE',
          image: 'https://static.wixstatic.com/media/83306c_fbdceef001e74d028a34ca68bf184a8c~mv2.png/v1/fill/w_480,h_604,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/83306c_fbdceef001e74d028a34ca68bf184a8c~mv2.png',
        }, {
          name: 'VINAYAGAR STATUE',
          image: 'https://img3.exportersindia.com/product_images/bc-full/2022/3/9947187/handmade-marble-ganesh-statue-1646894000-6237551.jpeg',
        }, {
          name: 'DEER STATUE',
          image: 'https://m.media-amazon.com/images/I/51+yOxny0PL._AC_UF894,1000_QL80_.jpg',
        }, {
          name: 'BUNNY STATUE',
          image: 'https://m.media-amazon.com/images/I/61GxC4CZhvL._AC_UF894,1000_QL80_.jpg',
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

export default StatuesAndSculptures;
