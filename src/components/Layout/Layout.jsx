import React from 'react';
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
import './Layout.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (

      <>
          <Header />
          <div>
              <Outlet /> {/* este renderiza el contenido de las rutas */}
          </div>
          <Footer /> {/* y este renderiza el componente Footer */}
      </>
  );
};

export default Layout;
