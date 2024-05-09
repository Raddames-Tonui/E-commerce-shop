import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarAdmin from './components/NavbarAdmin';

function LayoutAdmin() {
  return (
    <div className='space-y-16'>
      <NavbarAdmin />
      <Outlet />      
    </div>
  );
}

export default LayoutAdmin;
