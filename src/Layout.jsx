import React from 'react';
import NavbarUser from './components/NavbarUser';
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='space-y-16'>
      <NavbarUser />
      <Outlet/>
    </div>
  );
}

export default Layout;
