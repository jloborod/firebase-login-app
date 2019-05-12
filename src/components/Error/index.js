import React from 'react';
import PropTypes from 'prop-types';

import './Error.css';

const Error = ({ error }) => (
  <span className='error'>{error}</span>
);

Error.propTypes = {
  error: PropTypes.string,
};

Error.defaultProps = {
  error: 'Opps...there was an error.'
};

export default Error;
