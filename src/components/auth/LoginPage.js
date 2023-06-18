import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import { login } from './service';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../store/reducers/sessionReducer';

function LoginPage({ onLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [remember, setRemember] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await login(credentials, navigate, remember);      
      dispatch({ type: LOGIN_SUCCESS, payload: response });
      
      onLogin();
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  return (
    <div>
    <h1>Log in to Nodepop</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        autoComplete="false"
        value={credentials.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        autoComplete="false"
        value={credentials.password}
      />
      <br />
      <label>
        Recordar contraseña
        <input
          type="checkbox"
          name="password-checkbox"
          checked={remember}
          onChange={handleRememberChange}
        />
      </label>
      <Button type="submit" variant="secondary">
        Log in
      </Button>
    </form>
  </div>
  );
}

export default LoginPage;
