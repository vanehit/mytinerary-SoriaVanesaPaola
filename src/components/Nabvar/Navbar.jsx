import React from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { Link as Anchor, useLocation } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, loginUser } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const AppNavbar = ({ transparent }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticatedRedux = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const handleLogin = () => {
    dispatch(loginUser());
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Anchor className="navbar-brand" to="/">
          <span style={{ color: '#feac04', fontWeight: 'bold', fontSize: '24px' }}>MyTinerary</span>
        </Anchor>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Anchor to="/" className="nav-link">
                Home
              </Anchor>
            </li>
            <li className={`nav-item ${location.pathname === '/cities' ? 'active' : ''}`}>
              <Anchor to="/cities" className="nav-link">
                Cities
              </Anchor>
            </li>
          </ul>
        </Navbar.Collapse>
        {isAuthenticatedRedux ? (
          <Anchor to="/" className="btn btn-logout" onClick={handleLogout}>
            <PersonFill /> Log Out
          </Anchor>
        ) : (
          <Anchor to="/login" className="btn btn-login" onClick={handleLogin}>
            <PersonFill /> Log In
          </Anchor>
        )}
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
