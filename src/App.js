import React from 'react';
import ReusableForm from './ReusableForm';

function App() {
  return (
    <div>
      <div class = "header-container"><h1 class = "header">Service Connect</h1></div>
      <ReusableForm formType="signup" /> {/* or "signin" */}
    </div>
  );
}

export default App;
