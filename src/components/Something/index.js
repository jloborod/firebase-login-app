import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendEmailLink, signIn } from '../../store/actions/auth';

const Something = ({
  user,
  emailSent,
  confirm,
  match,
  location,
  sendEmailLink,
  signInWithEmailAndLink,
}) => {
  const email = match.params.email;
  const link = `${email}${location.search}`;

  if (email && link && confirm) {
    signInWithEmailAndLink(email, link);
  }

  return (
    <div className="Something">
      {!user && (
        <button
          onClick={() => sendEmailLink('jloborod@gmail.com')}
          disabled={emailSent}
        >
          Send Email Link
        </button>
      )}
      {!user && emailSent && <span>Your email link has been sent :)</span>}
      {user && <span>You are logged in!</span>}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  emailSent: state.auth.emailSent,
  confirm: state.auth.confirm,
});

const mapDispatchToProps = dispatch => ({
  sendEmailLink: bindActionCreators(sendEmailLink, dispatch),
  signInWithEmailAndLink: bindActionCreators(signIn, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Something);
