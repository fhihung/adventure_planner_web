import './NotFound.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useCustomNavigate } from '../../utils/navigate';

const NotFound = () => {
  const navigateTo = useCustomNavigate();
  return (
    <div className="container">
      <Navbar />
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <button onClick={() => navigateTo('')}>Go Back to Home</button>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
