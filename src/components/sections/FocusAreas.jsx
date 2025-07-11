import { Link } from "react-router-dom";
import focusAreas from "../../constants/focusAreas";
import "./FocusAreas.css";

const FocusAreas = () => {
  return (
    <section className="focus-areas">
      <div className="container">
        <h2>Our Core Focus Areas</h2>
        <div className="focus-grid">
          {focusAreas.map(({ id, title, description, icon }) => (
            <div key={id} className="focus-card">
              <div className="focus-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <Link to="/programs" className="btn btn-primary">
          Explore Our Programs &rarr;
        </Link>
      </div>
    </section>
  );
};

export default FocusAreas;