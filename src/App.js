import React from 'react';
import ReusableForm from './ReusableForm';

function App() {
  return (
    <div>
      <h1>Form</h1>
      <ReusableForm formType="signup" /> {/* or "signin" */}
    </div>
  );
}

export default App;
