// NewsEvents section

import { Link } from "react-router-dom";
import newsEvents from "../../constants/newsEvents";
import "./NewsEvents.css";

const NewsEvents = () => {
  return (
    <section className="news-events">
      <div className="container">
        <h2>Latest News & Events</h2>
        <ul>
          {newsEvents.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
        <Link to="/news" className="btn btn-primary">
          View All News &rarr;
        </Link>
      </div>
    </section>
  );
};

export default NewsEvents;
