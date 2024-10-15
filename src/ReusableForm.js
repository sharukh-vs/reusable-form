// ReusableForm.js
import React, { useState } from 'react';
import Modal from './Modale'; // Import the modal component
import './ReusableForm.css'; // Assuming you already have your styles in this file
// import '@fortawesome/fontawesome-free/css/all.min.css';

const ReusableForm = ({ formType }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    bio: '',
  });

  const [isSignUp, setIsSignUp] = useState(formType === 'signup');
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(''); // Modal message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set the modal message based on the form type
    setModalMessage(isSignUp ? 'Successfully Signed Up!' : 'Successfully Signed In!');
    setShowModal(true); // Show the modal on form submission
  };

  return (
    <div>
      {showModal && (
        <Modal message={modalMessage} onClose={() => setShowModal(false)} />
      )}
      
      <form onSubmit={handleSubmit} className="form-container">
        <div class = 'title'>
        {isSignUp ? 'Getting Started..!' : 'Let\'s Sign In..!'}
        </div>
        
        {!isSignUp && (
          <>
            <div>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
            placeholder='Username or Email'
            required
          />
        </div>
          </>
        )
        }
        {isSignUp && (
          <>
            <div className='input-group'>
            {/* <i className="fas fa-user input-icon"></i> */}
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input-field"
                placeholder='Username'
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder='EMail'
                required
              />
            </div>

          </>
        )
        }  
        
        <div>  
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            placeholder="Password"
            required
          />
        </div>

        {isSignUp && (
          <>
            <div>
              
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field"
                placeholder="Confirm Password"
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="submit-btn">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>

        <div className="toggle-link" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
        </div>
      </form>
    </div>
  );
};

export default ReusableForm;
