import { useState } from 'react'
import './App.css'
import LoginForm from './component/LoginForm'
import { Route, Routes } from 'react-router-dom'
import Register from './component/Register'
import ProductList from './component/Products/ProductList'
import MainProduct from './component/Products/cards/MainProduct'

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:handle" element={<MainProduct />} />
    </Routes>
     
    </>
  )
}

export default App
