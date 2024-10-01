import { useState, useEffect } from 'react';
import { useCustomNavigate } from '../../utils/navigate';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';

const Signup = () => {
  const navigateTo = useCustomNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // useEffect to show toast notifications when there's an error
  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(''); // Clear error after showing toast
    }
  }, [error]);

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        // Update the displayName
        await updateProfile(user, { displayName: name });
        toast.success('Success Register!');
        setTimeout(() => {
          navigateTo('login');
        }, 2000); // Delay of 2 seconds
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="wrapper">
        <div className="account">
          <form onSubmit={handleSignup}>
            <h2>Sign up account</h2>
            <input
              type="text"
              id="name"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Confirm</button>
            <div className="link" onClick={() => navigateTo('login')}>
              Sign in
            </div>
          </form>
          <img src="/images/avt3.png" alt="" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
