import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Header from './Components/Header';
import Cart from './Components/Cart';
import SingleItem from './Components/SingleItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/header" element={<Header />} />
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/user/cart/:id" element={<SingleItem />} />
      </Routes>
    </div>
  );
}

export default App;
