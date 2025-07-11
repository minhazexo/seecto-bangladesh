import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./AboutIntro.css";

const AboutIntro = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: headingRef, delay: 0 },
      { ref: paragraphRef, delay: 200 },
      { ref: visionRef, delay: 400 },
      { ref: missionRef, delay: 600 },
      { ref: linkRef, delay: 800 }
    ];

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = elements.find(el => el.ref.current === entry.target);
          if (element) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, element.delay);
          }
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    elements.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          ref.current.classList.add("visible");
        }
      }
    });

    return () => {
      elements.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section className="about-intro" ref={sectionRef}>
      <div className="container">
        <h2 ref={headingRef} className="fade-words">
          <span>About</span> <span>SEECTO</span> <span>Bangladesh</span>
        </h2>

        <p ref={paragraphRef}>
          SEECTO Bangladesh is a youth-led climate justice organization founded on December 5, 2020, 
          and registered with the Department of Youth Development. Our mission is to empower young 
          people across Bangladesh to actively engage in climate governance, advocate for sustainable 
          development, and promote equitable solutions to the climate crisis.
        </p>

        <div className="vision-mission">
          <div className="focus-card" ref={visionRef}>
            <h3>OUR VISION</h3>
            <p>
              To build an equitable, sustainable, and climate-resilient Bangladesh led by empowered youth.
            </p>
            <Link to="/about/vision" className="focus-link">
              Learn More &rarr;
            </Link>
          </div>

          <div className="focus-card" ref={missionRef}>
            <h3>OUR MISSION</h3>
            <ul>
              <li>Empower youth through leadership development and capacity building</li>
              <li>Advocate for climate justice and inclusive policies</li>
              <li>Promote renewable energy and sustainable practices</li>
              <li>Facilitate partnerships for youth voice in climate dialogues</li>
            </ul>
            <Link to="/about/mission" className="focus-link">
              Learn More &rarr;
            </Link>
          </div>
        </div>

        <Link to="/about" className="read-more" ref={linkRef}>
          Learn More About Us &rarr;
        </Link>
      </div>
    </section>
  );
};

export default AboutIntro;