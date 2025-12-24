import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import translations from "../utils/lang";

const Navbar = () => {
  const [lang, setLang] = useState("en");

  // Load saved language
 useEffect(() => {
  const savedLang = localStorage.getItem("lang");

  if (!savedLang) {
    // 👈 First visit: force English
    localStorage.setItem("lang", "en");
    setLang("en");
  } else {
    setLang(savedLang);
  }
}, []);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "hi" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    window.location.reload(); // simple & safe
  };

  const t = translations[lang];

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
                {t.home}
              </NavLink>
            </li>
            <li>
              <NavLink to="/report">{t.reportIssues}</NavLink>
            </li>
            <li>
              <NavLink to="/browse">{t.browseIssues}</NavLink>
            </li>
            <li>
              <NavLink to="/about">{t.about}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{t.contact}</NavLink>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <Link className="btn btn-outline" to="/report">
            {t.reportBtn}
          </Link>
          <Link className="btn btn-primary" to="/signup">
            {t.signup}
          </Link>

          {/* 🌐 Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="btn btn-outline"
            style={{ marginLeft: "10px" }}
          >
            {t.toggle}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
