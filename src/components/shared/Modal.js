import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  max-width: 400px;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModalMessage = styled.p`
  margin-bottom: 20px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Modal = ({ title, message, onConfirm, onCancel }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <ModalButtons>
          <Button variant="primary" onClick={onConfirm}>Confirm</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </ModalButtons>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
