const FutureGoals = () => {
  const goals = [
    "Scale up renewable energy projects nationwide through partnerships with local communities and government",
    "Expand digital platforms for climate data and youth networking to enhance collaboration",
    "Secure enhanced climate finance for youth-led initiatives through advocacy and grant programs",
    "Promote inclusive policy frameworks integrating youth and marginalized communities in decision-making",
    "Organize annual youth climate leadership summits to foster next generation of climate leaders",
    "Establish regional chapters to expand our impact across all divisions of Bangladesh",
    "Develop a climate innovation hub to support youth-led sustainable solutions"
  ];

  return (
    <section className="future-goals">
      <div className="container">
        <h2>Our Future Goals & Aspirations</h2>
        <div className="goals-container">
          <ul className="goals-list">
            {goals.map((goal, index) => (
              <li key={index} className="goal-item">
                <div className="goal-checkmark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FutureGoals;