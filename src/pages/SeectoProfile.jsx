import React from "react";
import "./SeectoProfile.css"; // optional styling file

const SeectoProfile = () => {
  return (
    <div className="seecto-profile px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">SEECTO Bangladesh Profile</h1>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Overview</h2>
        <p>SEECTO Bangladesh is a youth-led climate justice organization founded on December 5, 2020...</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Vision</h2>
        <p>To build an equitable, sustainable, and climate-resilient Bangladesh led by empowered youth.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Mission</h2>
        <ul className="list-disc ml-6">
          <li>Empower youth through leadership development, capacity building, and community engagement.</li>
          <li>Advocate for climate justice and inclusive, just climate policies.</li>
          <li>Promote renewable energy and sustainable practices across communities.</li>
          <li>Facilitate partnerships that strengthen youth voice in national and international climate dialogues.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Core Focus Areas</h2>
        <ul className="list-disc ml-6">
          <li><strong>Youth Empowerment:</strong> Leadership, entrepreneurship, advocacy...</li>
          <li><strong>Climate Justice:</strong> Inclusive policy, climate finance, equity...</li>
          <li><strong>Energy Transition:</strong> Clean energy for communities...</li>
          <li><strong>Well-being:</strong> Health and climate impact mitigation...</li>
          <li><strong>Digital Aid:</strong> Tech-driven awareness and advocacy...</li>
          <li><strong>Partnerships:</strong> Multi-stakeholder collaboration...</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Organizational Structure</h2>
        <h3 className="text-xl font-medium">Steering Committee</h3>
        <ul className="list-disc ml-6">
          <li>President: Khadiza Mustary Maheen</li>
          <li>ED: Habiba Jahan Bithi</li>
          <li>Director: Md Mahabul Alam Tamim</li>
        </ul>
        {/* Add members if available */}
        <h3 className="text-xl font-medium mt-4">Executive Team</h3>
        <p>Head of Programme, MEAL, Admin & Finance, Partnership, Policy, Communications</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Key Projects</h2>
        <ul className="list-disc ml-6">
          <li>LCOY Bangladesh 2025</li>
          <li>Renewable Energy Pilots</li>
          <li>Youth Leadership Programs</li>
          <li>Climate Justice Campaigns</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Impact</h2>
        <ul className="list-disc ml-6">
          <li>Mobilized over 10,000 youth</li>
          <li>Represented at COP29</li>
          <li>National youth climate policy contributor</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
        <p>🌐 www.seecto.org<br />
        📧 info.seecto@gmail.com / tamim.seecto@gmail.com<br />
        📞 +8801758068640<br />
        📘 Facebook: SEECTO Bangladesh</p>
      </section>
    </div>
  );
};

export default SeectoProfile;
