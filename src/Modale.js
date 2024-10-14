// Modal.js
import React from 'react';

const Modale = ({ message, onClose }) => {
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    zIndex: '1000',
    textAlign: 'center',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '999',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#61dbfb',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>
        <h3>{message}</h3>
        <button style={buttonStyle} onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default Modale;
