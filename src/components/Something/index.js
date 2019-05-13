import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { init } from '../../store/actions/auth';

const Something = ({ onClick }) =>
  <button
    onClick={onClick}
  >
    Init
  </button>;

const mapDispatchToProps = dispatch => ({
  onClick: bindActionCreators(init, dispatch),
})

export default connect(
  null,
  mapDispatchToProps,
)(Something);
