import { useEffect, useState } from 'react';
import { useCustomNavigate } from '../../utils/navigate';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import './Login.css';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const navigateTo = useCustomNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError('');
    }
  }, [error]);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success('Success Login');
        setTimeout(() => {
          navigateTo('');
        }, 2000);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="wrapper">
      <div className="account">
        <form onSubmit={handleLogin}>
          <h2>Sign in</h2>
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
          <button type="submit">Confirm</button>
          {error && <p className="error">{error}</p>}
          <div className="link" onClick={() => navigateTo('signup')}>
            Sign up
          </div>
        </form>
        <img src="/images/avt3.png" alt="" />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
