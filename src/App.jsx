import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Products from './Pages/Products';
import LayoutAdmin from './LayoutAdmin';
import AddProducts from './Pages/AddProducts';
import AdminHome from './Pages/AdminHome';
import Orders from './Pages/Orders'; // Assuming you have an Orders component
import UpdateProduct from './components/ProductUpdate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminHome />} />
          <Route path="addproducts" element={<AddProducts />} />
          <Route path="orders" element={<Orders />} />
          <Route path="/admin/update/:id" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
