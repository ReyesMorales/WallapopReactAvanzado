import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../auth/service';
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import '../adverts/styles.css';

const HeaderContainer = styled.header`
  /* Estilos del encabezado */
`;

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector((state) => state.session.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogoutClick = async () => {
    setShowModal(true);
  };

  const handleConfirmLogout = async () => {
    await logout();
    dispatch({ type: 'LOGOUT' });
    setShowModal(false);
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return (
    <HeaderContainer>
      <nav>
        {isLoggedIn ? (
          <Button
            onClick={handleLogoutClick}
            variant="primary"
            className="logout-button"
          >
            Logout
          </Button>
        ) : (
          <Button variant="secondary" className="login-button">
            Login
          </Button>
        )}
      </nav>
      {showModal && (
        <Modal
          title="Confirm Logout"
          message="Are you sure you want to logout?"
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
