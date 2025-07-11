import teamMembers from "../constants/teamMembers";
import "./About.css";

const About = () => {
  return (
    <section className="about-page container">
      <h1>Our Story</h1>
      <p>
        Founded in 2020, SEECTO Bangladesh is a registered youth-led organization focused on climate justice and sustainable development. We believe in empowering youth to become changemakers through education, advocacy, and innovative projects.
      </p>

      <h2>Vision & Mission</h2>
      <div className="vision-mission-section">
        <div className="vm-card vision-card">
          <h3>Our Vision</h3>
          <p>
            An equitable, sustainable, and climate-resilient Bangladesh led by empowered youth.
          </p>
        </div>
        <div className="vm-card mission-card">
          <h3>Our Mission</h3>
          <ul>
            <li>Empower youth through leadership development and capacity building</li>
            <li>Advocate for climate justice and inclusive policies</li>
            <li>Promote renewable energy and sustainable practices</li>
            <li>Facilitate partnerships for youth voice in climate dialogues</li>
          </ul>
        </div>
      </div>

      {/* ✅ Team Section Restored */}
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map(({ id, name, role, bio, photo }) => (
          <div key={id} className="team-member">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <p><em>{role}</em></p>
            <p>{bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
