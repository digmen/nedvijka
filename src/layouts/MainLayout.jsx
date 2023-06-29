import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Fab from '../components/Fab';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Fab />
      <Footer />
    </div>
  );
}

export default MainLayout;
