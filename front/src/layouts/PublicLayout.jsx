import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const PublicLayout = () => {
  <div className='flex flex-col h-screen justify-between'>
    <Navbar />
    <div className='file:h-full darkMode  bg-slate-600'>
      <Outlet />
    </div>
    <Footer />
  </div>;
};

export default PublicLayout;
