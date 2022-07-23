import React, { useEffect, useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import { getAuthors } from '../api/authorData';
import { useAuth } from '../utils/context/authContext';

export default function Author() {
  const [authors, setAuthors] = useState([]);

  const { user } = useAuth();

  const getAllAuthors = (() => {
    getAuthors(user.uid).then(setAuthors);
  });

  useEffect(() => {
    getAllAuthors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllAuthors} />
      ))}
    </div>
  );
}
