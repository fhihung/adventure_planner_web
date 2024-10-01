import './Navbar.css';
import Button from '../Button/Button';
import { useCustomNavigate } from '../../utils/navigate';
import { useState, useEffect } from 'react';
import { auth } from '../../firebase/firebase-config';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const navigateTo = useCustomNavigate();
  const [logged, setLogged] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogged(true);
        setUserName(user.displayName || ''); // Get the displayName or fallback to an empty string
      } else {
        setLogged(false);
        setUserName('');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setLogged(false);
        setUserName('');
        navigateTo('');
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  const renderAuthLinks = () => {
    return logged ? (
      <>
        <li id="username">{userName}</li> {/* Show user name */}
        <li onClick={handleSignOut}>Sign out</li>
      </>
    ) : (
      <>
        <li onClick={() => navigateTo('login')}>Sign in</li>
        <li onClick={() => navigateTo('signup')}>Sign up</li>
        <li onClick={() => navigateTo('tripplan')}>Plan</li>
      </>
    );
  };

  return (
    <div className="navbar">
      <div className="logo-group">
        <div className="logo" onClick={() => navigateTo('')}>
        <img src="/images/logo.png" alt="" />
        </div>
        <span onClick={() => navigateTo('')}>AdventurePlan!</span>
      </div>
      <ul className="navigate">
        {renderAuthLinks()}
        <li>
          <Button>Get App</Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
