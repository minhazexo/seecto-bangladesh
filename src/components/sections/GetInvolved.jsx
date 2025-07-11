// GetInvolved section

import { Link } from "react-router-dom";
import "./GetInvolved.css";

const GetInvolved = () => {
  return (
    <section className="get-involved">
      <div className="container">
        <h2>Get Involved</h2>
        <p>
          Join our growing community of young climate leaders. Volunteer, partner, or support our initiatives to drive climate justice in Bangladesh.
        </p>
        <div className="btn-group">
          <Link to="/get-involved#volunteer" className="btn btn-primary">
            Become a Volunteer
          </Link>
          <Link to="/get-involved#partnerships" className="btn btn-secondary">
            Partner with Us
          </Link>
          <Link to="/get-involved#donate" className="btn btn-tertiary">
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
