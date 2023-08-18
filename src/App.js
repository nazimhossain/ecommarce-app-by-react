import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import Footer from './Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
}

export default App;
