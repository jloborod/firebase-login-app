import React from 'react';

import EmailForm from '../EmailForm';

const SendEmailPage = ({ sendEmail }) => (
  <div className='SendEmailPage'>
    <EmailForm
      submitLabel='Send email'
      onSubmit={sendEmail}
    />
  </div>
);

export default SendEmailPage;
