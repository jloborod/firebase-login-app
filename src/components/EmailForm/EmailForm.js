import React from 'react';
import PropTypes from 'prop-types';

const EmailForm = ({
  email,
  emailPlaceholder,
  submitLabel,
  onInputChange,
  onSubmit,
}) => (
  <form>
    <input
      type="text"
      placeholder={emailPlaceholder}
      value={email}
      onChange={onInputChange}
    />
    <button
      type="submit"
      onClick={onSubmit}
    >
      {submitLabel}
    </button>
  </form>
);

EmailForm.propTypes = {
  email: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  submitLabel: PropTypes.string,
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

EmailForm.defaultProps = {
  email: '',
  emailPlaceholder: 'Add a valid email address here...',
  submitLabel: 'Submit',
  onInputChange: () => {},
  onSubmit: () => {},
};

export default EmailForm;
