import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Download from './Download/Download';
import Features from './Features/Features';
import Intro from './Intro/Intro';

import './Home.css';
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Intro />
      <Features />
      <Download />
      <Footer />
    </div>
  );
};

export default Home;
