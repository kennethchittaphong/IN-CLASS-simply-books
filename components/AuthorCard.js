import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj}`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }} />
      <div>firstName: {authorObj.first_name}</div>
      <div>lastName: {authorObj.last_name}</div>
      <div>email: {authorObj.email}</div>
      <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
        DELETE
      </Button>
      <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
        <Button variant="info">EDIT</Button>
      </Link>
    </>

  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AuthorCard;
