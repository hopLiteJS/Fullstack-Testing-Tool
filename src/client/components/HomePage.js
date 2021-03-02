import React from 'react';
import SubmitForm from './SubmitForm.js';

function HomePage({ children }) {
  return (
    <div>
      <h1>HomePage is Running</h1>
      <SubmitForm />
    </div>
  )
}

export default HomePage;