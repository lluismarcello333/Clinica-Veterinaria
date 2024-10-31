import React from 'react'

const ProductDetails = () => {
  return (
    <div>
      Teste
    </div>
  )
}

export default ProductDetails


/* import React, { useState } from 'react';
import { Button } from '@mui/material';
import './ProductDetails.css'; 

const ProductDetails = ({ product, onAddToCart, onContinueShopping }) => {
  const [selectedImage, setSelectedImage] = useState(product.image[0]); 

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product-details-container">
      <div className="product-details">
        <h2>{product.title}</h2>
        <div className="product-images">
          <div className="main-image">
            <img src={selectedImage} alt={product.title} />
          </div>
          <div className="thumbnail-images">
            {product.image.map((image, index) => (
              <div
                key={index}
                className="thumbnail-image"
                onClick={() => handleImageClick(image)}
              >
                <img src={image} alt={product.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">Price: ${product.price.toFixed(2)}</div>
        <div className="action-buttons">
          <Button variant="contained" color="primary" onClick={() => onAddToCart(product)}>
            Add to Cart
          </Button>
          <Button variant="contained" color="secondary" onClick={onContinueShopping}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; */