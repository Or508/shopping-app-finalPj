import React from "react";
import { useCart } from "../contexts/CartContext";

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // חישוב סכום כולל
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>🛒 העגלה שלך</h2>
      {cartItems.length === 0 ? (
        <p>אין מוצרים בעגלה</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item._id} style={{ marginBottom: '15px' }}>
              <h4>{item.name}</h4>
              <p>כמות: {item.quantity}</p>
              <p>מחיר ליחידה: ₪{item.price}</p>
              <p>סה"כ למוצר: ₪{(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item._id)}>הסר</button>
              <hr />
            </div>
          ))}

          <h3>💰 סה"כ לעגלה: ₪{totalPrice.toFixed(2)}</h3>
          <button onClick={clearCart}>נקה עגלה</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
