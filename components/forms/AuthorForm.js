import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { updateAuthor, createAuthor } from '../../api/authorData';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
};

function AuthorForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateAuthor(formInput)
        .then(() => router.push('/author'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createAuthor(payload).then(() => {
        router.push('/author');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Author</h2>
      <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter first name" name="first_name" value={formInput.first_name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter last name" name="last_name" value={formInput.last_name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Email" className="mb-3">
        <Form.Control type="text" placeholder="Enter your email" name="email" value={formInput.email} onChange={handleChange} required />
      </FloatingLabel>

      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="sale"
        name="sale"
        label="On Sale?"
        checked={formInput.sale}
        onChange={(e) => setFormInput((prevState) => ({
          ...prevState,
          sale: e.target.checked,
        }))}
      />

      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Author</Button>
    </Form>
  );
}

AuthorForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    author_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

AuthorForm.defaultProps = {
  obj: initialState,
};

export default AuthorForm;
