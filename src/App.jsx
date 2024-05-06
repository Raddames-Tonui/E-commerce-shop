import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Pages/Home';
import Products from './Pages/Products';
import LayoutAdmin from './LayoutAdmin';
import AddProducts from './Pages/AddProducts';
import AdminHome from './Pages/AdminHome';



function App() {
  return (
    <BrowserRouter>
        <Routes >
          <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/Products' element={<Products/>}/>
          </Route>
          <Route path='/admin' element={<LayoutAdmin/>} >
              <Route path='/admin' element={<AdminHome/>} />
              <Route path='/admin/AddProducts' element={<AddProducts/>} />                         
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App