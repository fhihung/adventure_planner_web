import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="url">
        <div className="list">
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href="">How it works</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Demo</a>
            </li>
          </ul>
        </div>
        <div className="list">
          <h4>RESOURCES</h4>
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Shipping Information</a>
            </li>
            <li>
              <a href="">Returns and Exchanges</a>
            </li>
          </ul>
        </div>
        <div className="list">
          <h4>DEMO</h4>
          <ul>
            <li>
              <a href="">Consulting</a>
            </li>
            <li>
              <a href="">Custom Solutions</a>
            </li>
            <li>
              <a href="">Product Support</a>
            </li>
            <li>
              <a href="">Training</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">Copyright ©2024 Teams 02. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
