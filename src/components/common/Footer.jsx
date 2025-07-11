import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src="/logo.png" alt="SEECTO Bangladesh" />
          </Link>
        </div>
        
        <div className="footer-content">
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/news">News</Link>
            <Link to="/get-involved">Get Involved</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          
          <div className="contact-info">
            <p>Email: info.seecto@gmail.com</p>
            <p>Phone: +8801758068640</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>
          
          <div className="social-icons">
            <a href="https://www.facebook.com/seectobangladesh?_rdc=1&_rdr" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/SEECTOBangladesh" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/seecto-bangladesh-179b06273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://minhazexo.github.io/portfolio/" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <small>© {new Date().getFullYear()} SEECTO Bangladesh. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
