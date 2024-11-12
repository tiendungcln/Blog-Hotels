import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '../../redux/features/auth/authApi';
import { setUser } from '../../redux/features/auth/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const response = await loginUser(data).unwrap();
      console.log(response);
      const { token, user } = response;

      // Lưu thông tin người dùng vào Redux store và localStorage
      dispatch(setUser({ user }));

      alert("Login successfully");
      navigate('/');
    } catch (error) {
      setMessage("Please provide a valid email and password");
    }
  }

  return (
    <div className='max-w-sm bg-white mx-auto p-8 mt-36'>
      <h2 className='text-2xl font-semibold pt-5'>Please Login</h2>
      <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
        <input type='email' value={email}
          placeholder='Email'
          required
          onChange={(e) => setEmail(e.target.value)}
          className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
        />
        <input type='password' value={password}
          placeholder='Password'
          required
          onChange={(e) => setPassword(e.target.value)}
          className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
        />
        {
          message && <p className='text-red-500'>{message}</p>
        }
        <button
          disabled={loginLoading}
          className='w-full mt-5 py-3 bg-primary hover:bg-indigo-500 text-white font-medium rounded-md'>
          Login
        </button>
      </form>
      <p className='my-5 text-center'>Don't have an account? <Link to='/register' className='text-red-700 italic'>Register</Link> here.</p>
    </div>
  )
}

export default Login;
