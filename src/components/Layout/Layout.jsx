import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css'

const Layout = () => {
  return (
    <>
     <div>
      <Header className="layout__header" />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Layout;
