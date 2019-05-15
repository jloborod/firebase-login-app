import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signOut } from '../../store/actions/auth';

const HomePage = ({ signOut }) => {
  const handleClick = () => {
    signOut();
  };

  return (
    <div className='HomePage'>
      <span>You are logged in!</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: bindActionCreators(signOut, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(HomePage);
