import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <h1>
          Empowering Youth for Climate Justice and Sustainable Development in Bangladesh
        </h1>
        <p>
          Building a just, equitable, and resilient future through youth leadership, renewable energy, and climate advocacy.
        </p>
        <div className="hero-buttons">
          <Link to="/get-involved" className="btn btn-primary">
            Join Us
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
