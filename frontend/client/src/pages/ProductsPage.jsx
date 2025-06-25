import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../contexts/CartContext"; // 👈 הוספת הקריאה לקונטקסט

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // 👈 שליפת הפעולה מהקונטקסט

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
        setProducts(res.data);
      } catch (err) {
        console.error("❌ Error loading products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>products available</h2>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div>
          {products.map(product => (
            <div key={product._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h3>{product.name}</h3>
              <img src={product.imageUrl} alt={product.name} width="200" />
              <p>{product.description}</p>
              <p>₪{product.price}</p>
              <button onClick={() => addToCart(product)}>הוסף לעגלה 🛒</button> {/* 👈 כפתור חדש */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
