import { steeringCommittee, executiveTeam } from "../../constants/organizationalStructure";
import "./TeamSection.css";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Our Leadership Team</h2>
        
        <div className="team-grid">
          <div className="steering-committee">
            <h3>Steering Committee</h3>
            <ul>
              {steeringCommittee.map((member, index) => (
                <li key={index}>
                  <strong>{member.position}</strong>
                  <p>{member.name}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="executive-team">
            <h3>Executive Team</h3>
            <ul>
              {executiveTeam.map((member, index) => (
                <li key={index}>
                  <strong>{member.position}</strong>
                  {member.description && <span className="role-description">{member.description}</span>}
                  <p>{member.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;