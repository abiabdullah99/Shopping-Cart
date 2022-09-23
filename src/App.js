import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './Component/Cart/Cart';
import Checkout from './Component/Cart/Checkout';
import Home from './Component/Home/Home';
import Navbar from './Component/Shared/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
};

export default App;