import React from 'react';
import PropTypes from 'prop-types';

export default function User({
  image, name, email, lastLogin,
}) {
  return (
    <>
      <h5>{name}</h5>
      <div>{email}</div>
      <div>{lastLogin}</div>
      <div>{image}</div>
    </>
  );
}

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  image: '',
  name: '',
  email: '',
  lastLogin: '',
};
