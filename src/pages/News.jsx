// News Page

import newsEvents from "../constants/newsEvents";
import "./News.css";

const News = () => {
  return (
    <section className="news-page container">
      <h1>News & Events</h1>
      <ul>
        {newsEvents.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      {/* You can extend with photo galleries, videos, event calendar */}
    </section>
  );
};

export default News;
