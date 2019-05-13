import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { authInit } from '../../store/actions/auth';

const Something = ({ onClick }) =>
  <button
    onClick={onClick}
  >
    Click me and I will say Hello!
  </button>;

const mapDispatchToProps = dispatch => ({
  onClick: bindActionCreators(authInit, dispatch),
})

export default connect(
  null,
  mapDispatchToProps,
)(Something);
