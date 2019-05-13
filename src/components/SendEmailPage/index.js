import React, { useState } from 'react';

import EmailForm from '../EmailForm';
import Error from '../Error';

const SendEmailPage = ({ sendEmailLink }) => {
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSendEmailLink = (email) => {
    sendEmailLink(email)
      .then(() => {
        setEmailSent(true);
        setError(false)
      })
      .catch(err => {
        setError(true);
      });
  }

  return (
    <div className='SendEmailPage'>
      <EmailForm
        submitLabel='Send Email Link'
        onSubmit={handleSendEmailLink}
      />
      { emailSent && <span>An email link has been sent to your email account :)</span>}
      { error && <Error error='The provided email is not valid...' /> }
    </div>
  )
};

export default SendEmailPage;
