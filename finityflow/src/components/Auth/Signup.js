import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { supabase } from '../../utils/supabaseClient';

const Signup = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const { firstName, lastName, email, password } = formData;

  useEffect(() => {
    if (user) {
      navigate('/signup');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      const newUser = data.user;
      if (!newUser) throw new Error('Sign-up failed. No user returned.');

      const { error: insertError } = await supabase.from('users').insert([
        {
          id: newUser.id,
          first_name: firstName,
          last_name: lastName,
          email,
        },
      ]);

      if (insertError) throw insertError;

      navigate('/login');
    } catch (error) {
      console.error(error);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {errorMsg && <p className="text-danger">{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            value={firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            value={lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            value={password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <p className="mt-3">
        Already have an account? <a href="/">Log In</a>
      </p>
    </div>
  );
};

export default Signup;
