import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';

const handleChange = async (e) => {
  const username = "karin";
  const password = "password123";
  const response = await fetch('/api/createuser', {
    method: 'POST',
    body: {
      username,
      password
    }
  });
  alert('Form Submitted');
  event.preventDefault();
}

const SubmitForm = ({ children }) => {
  return (
    <form noValidate autoComplete="off" onSubmit={(e) => handleChange}>
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" />
    </form>
  )
}

export default SubmitForm;