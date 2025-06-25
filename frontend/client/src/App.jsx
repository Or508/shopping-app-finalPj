import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <header style={{ backgroundColor: '#333', padding: '10px', color: 'white' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>MyShop</Link>
            </div>
            <div>
              <Link to="/products" style={{ color: 'white', marginRight: '15px' }}>Products</Link>
              <Link to="/cart" style={{ color: 'white', marginRight: '15px' }}>Cart</Link>
              <Link to="/login" style={{ color: 'white', marginRight: '15px' }}>Login</Link>
              <Link to="/signup" style={{ color: 'white' }}>Signup</Link>
            </div>
          </nav>
        </header>

        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
