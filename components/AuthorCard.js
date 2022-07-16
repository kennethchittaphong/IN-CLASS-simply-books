import React from 'react';
import PropTypes from 'prop-types';

function AuthorCard({
  firstName, lastName, email, firebaseKey,
}) {
  return (
    <>
      <div>firstName: {firstName}</div>
      <div>lastName: {lastName}</div>
      <div>email: {email}</div>
      <div>firebaseKey: {firebaseKey}</div>
    </>

  );
}

AuthorCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  firebaseKey: PropTypes.string,
};

AuthorCard.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  firebaseKey: '',
};

export default AuthorCard;
