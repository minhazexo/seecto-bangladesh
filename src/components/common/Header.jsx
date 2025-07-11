import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-links">
            <NavLink to="/" end className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>

            {/* About Dropdown */}
            <div className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}>
              <NavLink
                to="/about"
                className="nav-link dropbtn"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("about");
                }}
              >
                About <span className="dropdown-icon">▼</span>
              </NavLink>
              <div className="dropdown-content">
                <Link to="/about/focus/youth-empowerment" onClick={closeMenu}>Youth Empowerment</Link>
<Link to="/about/focus/climate-justice" onClick={closeMenu}>Climate Justice</Link>
<Link to="/about/focus/energy-transition" onClick={closeMenu}>Energy Transition</Link>

<Link to="/about/focus/partnerships" onClick={closeMenu}>Partnerships</Link>

                <Link to="/about/visions" onClick={closeMenu}>Visions</Link>
                <Link to="/about/missions" onClick={closeMenu}>Missions</Link>
                <Link to="/about/team" onClick={closeMenu}>Team</Link>
                <Link to="/about/contact" onClick={closeMenu}>Contact</Link>
              </div>
            </div>

            {/* Projects Dropdown */}
            <div className={`dropdown ${activeDropdown === "projects" ? "active" : ""}`}>
              <NavLink
                to="/projects"
                className="nav-link dropbtn"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("projects");
                }}
              >
                Projects <span className="dropdown-icon">▼</span>
              </NavLink>
              <div className="dropdown-content">
                <Link to="/projects/current" onClick={closeMenu}>Current Projects</Link>
                <Link to="/projects/past" onClick={closeMenu}>Past Projects</Link>
                <Link to="/projects/upcoming" onClick={closeMenu}>Upcoming Projects</Link>
              </div>
            </div>

            {/* Updates Dropdown */}
            <div className={`dropdown ${activeDropdown === "updates" ? "active" : ""}`}>
              <NavLink
                to="/updates"
                className="nav-link dropbtn"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("updates");
                }}
              >
                Updates <span className="dropdown-icon">▼</span>
              </NavLink>
              <div className="dropdown-content">
                <Link to="/updates/news" onClick={closeMenu}>News</Link>
                <Link to="/updates/events" onClick={closeMenu}>Events</Link>
                <Link to="/updates/blog" onClick={closeMenu}>Blog</Link>
              </div>
            </div>

            <NavLink to="/lcoy" className="nav-link" onClick={closeMenu}>
              LCOY Bangladesh
            </NavLink>
          </div>

          <div className="header-actions">
            <Link to="/donate" className="donate-btn" onClick={closeMenu}>
              Donate
            </Link>
            <Link to="/volunteer" className="volunteer-btn" onClick={closeMenu}>
              Volunteer
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
