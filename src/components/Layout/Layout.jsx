import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css'

const Layout = () => {
  return (
    <>
     <div className="layout-container">
      <Header className="layout__header" />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer className="container__footer" />
    </div>
    </>
  );
};

export default Layout;
