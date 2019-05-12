import React, { useState } from 'react';

import EmailForm from '../EmailForm';

const SignInPage = ({ match, signIn }) => {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.value;
    const link = match.link;

    console.log(email, link);
  }

  return (
    <div className='SignInPage'>
      <EmailForm
        submitLabel='Confirm email'
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignInPage;
