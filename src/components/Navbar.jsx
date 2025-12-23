import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-inner container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-circle">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2C8.686 2 6 6 6 10.5S8.686 19 12 20c3.314-1 6-5 6-9.5S15.314 2 12 2z"
                fill="white"
              />
            </svg>
          </div>
          <span className="logo-text">
            <span className="dark-green">Civic</span>
            <span className="light-green">X</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/report">Report Issues</NavLink>
            </li>
            <li>
              <NavLink to="/browse">Browse Issues</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <Link className="btn btn-outline" to="/report">
            Report an Issue
          </Link>
          <Link className="btn btn-primary" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
