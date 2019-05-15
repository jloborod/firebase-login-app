import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendEmailLink } from '../../store/actions/auth';
import EmailForm from '../EmailForm';

const SendEmailPage = ({ emailSent, sendEmailLink }) => {
  const handleSendEmailLink = (email) => {
    sendEmailLink(email);
  }

  return (
    <div className='SendEmailPage'>
      <EmailForm
        submitLabel='Send Email Link'
        onSubmit={handleSendEmailLink}
      />
      { emailSent && <span>An email link has been sent to your email account :)</span>}
    </div>
  )
};

const mapStateToProps = state => ({
  emailSent: state.auth.emailSent,
});

const mapDispatchToProps = dispatch => ({
  sendEmailLink: bindActionCreators(sendEmailLink, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SendEmailPage);
