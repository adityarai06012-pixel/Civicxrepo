const About = () => {
  return (
    <main>
      <section className="container about-section">
        <h1>About CivicX</h1>
        <p className="lead">
          A civic platform enabling citizens to report, track, and resolve
          issues with transparency.
        </p>

        <div className="about-grid">
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              CivicX aims to empower communities to take action, share
              responsibility and work hand-in-hand with local authorities to
              improve public services.
            </p>
          </div>

          <div className="card">
            <h3>Key Features</h3>
            <ul className="feature-list simple">
              <li>
                <strong>Transparency</strong> — Audit trail for every report.
              </li>
              <li>
                <strong>AI Prioritization</strong> — Detect urgent issues
                automatically.
              </li>
              <li>
                <strong>Rewards</strong> — Incentives for citizen engagement.
              </li>
              <li>
                <strong>Social Sharing</strong> — Raise awareness quickly.
              </li>
              <li>
                <strong>Analytics</strong> — Actionable dashboards for
                administrators.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
