import React from 'react';
import PropTypes from 'prop-types';

import EmailForm from './EmailForm';
import { useFormInput } from '../../hooks/form';

const EmailFormContainer = ({
  emailPlaceholder,
  submitLabel,
  onSubmit
}) => {
  const email = useFormInput('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(email.value);
  };

  return (
    <EmailForm
      email={email.value}
      emailPlaceholder={emailPlaceholder}
      submitLabel={submitLabel}
      onInputChange={email.onChange}
      onSubmit={handleSubmit}
    />
  );
};

EmailFormContainer.propTypes = {
  emailPlaceholder: PropTypes.string,
  submitLabel: PropTypes.string,
  onSubmit: PropTypes.func,
};

EmailFormContainer.defaultProps = {
  emailPlaceholder: 'Add a valid email address here...',
  submitLabel: 'Submit',
  onSubmit: () => {},
};

export default EmailFormContainer;