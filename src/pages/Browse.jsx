import { useEffect, useState } from "react";

const Browse = () => {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);

  // ============================
  // Load issues from LocalStorage
  // ============================
  useEffect(() => {
    const storedIssues = JSON.parse(localStorage.getItem("issues")) || [];
    setIssues(storedIssues);
  }, []);

  // ============================
  // Delete all issues
  // ============================
  const handleDeleteAll = () => {
    if (!window.confirm("⚠️ Are you sure you want to delete all issues?")) {
      return;
    }

    localStorage.removeItem("issues");
    localStorage.setItem("totalIssues", 0);
    setIssues([]);

    alert("🗑️ All issues cleared successfully.");
  };

  // ============================
  // Modal handlers
  // ============================
  const openModal = (issue) => {
    setSelectedIssue(issue);
  };

  const closeModal = () => {
    setSelectedIssue(null);
  };

  return (
    <main>
      {/* ================= Browse Static Issues ================= */}
      <section className="container">
        <div className="center">
          <h1>Browse Reported Issues</h1>
          <p className="muted">
            Filter and view recent issues reported by community members.
          </p>
        </div>

        <div className="issues-grid">
          {/* Static cards (same as HTML) */}
          <article className="issue-card">
            <div className="card-media">
              <img src="/images/image1.png" alt="Garbage" />
              <span className="badge pending">Pending</span>
            </div>
            <div className="card-body">
              <h3>Garbage Overflow</h3>
              <p className="muted small">
                Garbage not collected at Main Street.
              </p>
            </div>
          </article>

          <article className="issue-card">
            <div className="card-media">
              <img src="/images/image2.png" alt="Pothole" />
              <span className="badge inprogress">In Progress</span>
            </div>
            <div className="card-body">
              <h3>Large Pothole</h3>
              <p className="muted small">
                Dangerous pothole near bus stop.
              </p>
            </div>
          </article>

          <article className="issue-card">
            <div className="card-media">
              <img src="/images/image3.png" alt="Streetlight" />
              <span className="badge resolved">Resolved</span>
            </div>
            <div className="card-body">
              <h3>Broken Streetlight</h3>
              <p className="muted small">
                Streetlight repaired on Elm Road.
              </p>
            </div>
          </article>

          <article className="issue-card">
            <div className="card-media">
              <img src="/images/image4.png" alt="Water leak" />
              <span className="badge pending">Pending</span>
            </div>
            <div className="card-body">
              <h3>Water Leakage</h3>
              <p className="muted small">
                Leaking pipeline near market area.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ================= Dynamic Issues ================= */}
      <section className="container">
        <div className="center">
          <h1>Recently Reported Issues</h1>
          <p className="muted">View and manage all issues reported by you.</p>
        </div>

        <div className="browse-controls">
          <button className="delete-btn" onClick={handleDeleteAll}>
            🗑️ Delete All Issues
          </button>
        </div>

        <div className="issues-grid">
          {issues.length === 0 && (
            <p className="muted">No issues reported yet.</p>
          )}

          {issues.map((issue, index) => (
            <article
              className="issue-card"
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => openModal(issue)}
            >
              <div className="card-media">
                <img
                  src={
                    issue.image ||
                    "https://via.placeholder.com/600x400?text=No+Image"
                  }
                  alt="Issue"
                />
              </div>
              <div className="card-body">
                <h3>{issue.issue}</h3>
                <p className="muted small">
                  <strong>Location:</strong> {issue.location}
                </p>
                <p className="muted small">
                  <strong>Reported by:</strong> {issue.name}
                </p>
                <p className="muted small">
                  <strong>Date:</strong> {issue.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= Modal ================= */}
      {selectedIssue && (
        <div className="modal show" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>

            <h2>{selectedIssue.issue}</h2>

            {selectedIssue.image && (
              <img
                src={selectedIssue.image}
                alt="Issue"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            )}

            <p>
              <strong>Location:</strong> {selectedIssue.location}
            </p>
            <p>
              <strong>Reported by:</strong> {selectedIssue.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedIssue.email}
            </p>
            <p>
              <strong>Date:</strong> {selectedIssue.date}
            </p>

            <hr />

            <p>
              <strong>Description:</strong>
            </p>
            <p>{selectedIssue.issue}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Browse;
