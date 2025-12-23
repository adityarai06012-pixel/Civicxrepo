import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // === Replicates counter animation from script.js ===
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-card .big-num");
    const totalIssues = parseInt(localStorage.getItem("totalIssues")) || 0;

    const animateCounter = (element, target) => {
      let count = 0;
      const step = Math.ceil(Math.max(target, 1) / 100);
      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          element.textContent = target;
          clearInterval(timer);
        } else {
          element.textContent = count;
        }
      }, 18);
    };

    if (counters.length === 4) {
      animateCounter(counters[0], totalIssues);
      animateCounter(counters[1], Math.floor(totalIssues * 0.4));
      animateCounter(counters[2], Math.floor(totalIssues * 0.3));
      animateCounter(counters[3], Math.floor(totalIssues * 0.3));
    }
  }, []);

  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="hero container">
        <div className="hero-left">
          <span className="section-label">Real Impact</span>
          <h1>Empowering citizens to report and resolve civic issues.</h1>

          <p className="lead">
            CivicX is a crowdsourced platform that lets people report problems
            like potholes, broken streetlights, and garbage — track progress and
            help your community improve with transparency and accountability.
          </p>

          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/report">
              Report an Issue
            </Link>
            <Link className="btn btn-outline" to="/about">
              Learn More
            </Link>
          </div>

          <ul className="hero-stats">
            <li>
              <strong>2.5K+</strong>
              <span>Issues Reported</span>
            </li>
            <li>
              <strong>1.8K+</strong>
              <span>Resolved</span>
            </li>
            <li>
              <strong>98%</strong>
              <span>Community Satisfaction</span>
            </li>
          </ul>
        </div>

        <div className="hero-right">
          {/* Image path unchanged */}
          <img
            src="/images/image5.png"
            alt="Community reporting illustration"
            className="hero-image"
          />
        </div>
      </section>

      {/* ================= IMPACT / DASHBOARD ================= */}
      <section className="impact container">
        <div className="section-label">Real Impact</div>
        <h2>Community Impact Dashboard</h2>
        <p className="muted">
          See how CivicX is helping communities report, track and resolve issues.
        </p>

        <div className="grid-4cards">
          <div className="card stat-card">
            <div className="card-icon">📊</div>
            <h3>Total Issues</h3>
            <div className="big-num">0</div>
            <p className="muted small">total issues reported</p>
          </div>

          <div className="card stat-card">
            <div className="card-icon">⏳</div>
            <h3>Open Issues</h3>
            <div className="big-num">0</div>
            <p className="muted small">open issues reported</p>
          </div>

          <div className="card stat-card">
            <div className="card-icon">🔧</div>
            <h3>In Progress</h3>
            <div className="big-num">0</div>
            <p className="muted small">in progress</p>
          </div>

          <div className="card stat-card">
            <div className="card-icon">✅</div>
            <h3>Resolved</h3>
            <div className="big-num">0</div>
            <p className="muted small">resolved reported</p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features container">
        <h2>Why CivicX</h2>
        <p className="muted">Built with community and transparency in mind.</p>

        <ul className="feature-list">
          <li>
            <strong>Transparency</strong> — Track every issue from report to
            resolution.
          </li>
          <li>
            <strong>AI Prioritization</strong> — Automated prioritization of
            urgent issues.
          </li>
          <li>
            <strong>Rewards</strong> — Recognition & incentives for active
            citizens.
          </li>
          <li>
            <strong>Social Sharing</strong> — Raise awareness by sharing reports.
          </li>
          <li>
            <strong>Analytics</strong> — Dashboard for community and
            authorities.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
