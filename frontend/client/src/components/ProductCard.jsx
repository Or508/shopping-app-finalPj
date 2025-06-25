// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.imageUrl} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>שחר: ₪{product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)} style={styles.button}>
        הוסף לעגלה
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover'
  },
  button: {
    marginTop: '10px',
    padding: '8px 12px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default ProductCard;
