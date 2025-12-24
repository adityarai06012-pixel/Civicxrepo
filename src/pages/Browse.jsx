import { useEffect, useState } from "react";
import translations from "../utils/lang";

const Browse = () => {
  // 🌐 Language
  const lang = localStorage.getItem("lang") || "en";
  const t = translations[lang];

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
    if (
      !window.confirm(
        lang === "en"
          ? "⚠️ Are you sure you want to delete all issues?"
          : "⚠️ क्या आप सभी समस्याएँ हटाना चाहते हैं?"
      )
    ) {
      return;
    }

    localStorage.removeItem("issues");
    localStorage.setItem("totalIssues", 0);
    setIssues([]);

    alert(
      lang === "en"
        ? "🗑️ All issues cleared successfully."
        : "🗑️ सभी समस्याएँ सफलतापूर्वक हटा दी गईं।"
    );
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
          <h1>
            {lang === "en"
              ? "Browse Reported Issues"
              : "रिपोर्ट की गई समस्याएँ देखें"}
          </h1>
          <p className="muted">
            {lang === "en"
              ? "Filter and view recent issues reported by community members."
              : "समुदाय के सदस्यों द्वारा रिपोर्ट की गई हालिया समस्याएँ देखें।"}
          </p>
        </div>

        <div className="issues-grid">
          {/* Static cards (unchanged images & structure) */}
          <article className="issue-card">
            <div className="card-media">
              <img src="/images/image1.png" alt="Garbage" />
              <span className="badge pending">
                {lang === "en" ? "Pending" : "लंबित"}
              </span>
            </div>
            <div className="card-body">
              <h3>
                {lang === "en" ? "Garbage Overflow" : "कचरे की समस्या"}
              </h3>
              <p className="muted small">
                {lang === "en"
                  ? "Garbage not collected at Main Street."
                  : "मुख्य सड़क पर कचरा एकत्र नहीं किया गया।"}
              </p>
            </div>
          </article>

          <article className="issue-card">
            <div className="card-media">
              <img src="/images/image2.png" alt="Pothole" />
              <span className="badge inprogress">
                {lang === "en" ? "In Progress" : "प्रगति में"}
              </span>
            </div>
            <div className="card-body">
              <h3>{lang === "en" ? "Large Pothole" : "बड़ा गड्ढा"}</h3>
              <p className="muted small">
                {lang === "en"
                  ? "Dangerous pothole near bus stop."
                  : "बस स्टॉप के पास खतरनाक गड्ढा।"}
              </p>
            </div>
          </article>

          <article className="issue-card">
            <div className="card-media">
              <img src="/images/image3.png" alt="Streetlight" />
              <span className="badge resolved">
                {lang === "en" ? "Resolved" : "समाधान किया गया"}
              </span>
            </div>
            <div className="card-body">
              <h3>
                {lang === "en"
                  ? "Broken Streetlight"
                  : "खराब स्ट्रीटलाइट"}
              </h3>
              <p className="muted small">
                {lang === "en"
                  ? "Streetlight repaired on Elm Road."
                  : "एल्म रोड पर स्ट्रीटलाइट की मरम्मत की गई।"}
              </p>
            </div>
          </article>

          <article className="issue-card">
            <div className="card-media">
              <img src="/images/image4.png" alt="Water leak" />
              <span className="badge pending">
                {lang === "en" ? "Pending" : "लंबित"}
              </span>
            </div>
            <div className="card-body">
              <h3>
                {lang === "en" ? "Water Leakage" : "पानी का रिसाव"}
              </h3>
              <p className="muted small">
                {lang === "en"
                  ? "Leaking pipeline near market area."
                  : "बाजार क्षेत्र के पास पाइपलाइन से पानी रिस रहा है।"}
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ================= Dynamic Issues ================= */}
      <section className="container">
        <div className="center">
          <h1>
            {lang === "en"
              ? "Recently Reported Issues"
              : "हाल ही में रिपोर्ट की गई समस्याएँ"}
          </h1>
          <p className="muted">
            {lang === "en"
              ? "View and manage all issues reported by you."
              : "आपके द्वारा रिपोर्ट की गई सभी समस्याएँ देखें और प्रबंधित करें।"}
          </p>
        </div>

        <div className="browse-controls">
          <button className="delete-btn" onClick={handleDeleteAll}>
            {lang === "en"
              ? "🗑️ Delete All Issues"
              : "🗑️ सभी समस्याएँ हटाएँ"}
          </button>
        </div>

        <div className="issues-grid">
          {issues.length === 0 && (
            <p className="muted">
              {lang === "en"
                ? "No issues reported yet."
                : "अभी तक कोई समस्या रिपोर्ट नहीं की गई है।"}
            </p>
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
                  <strong>
                    {lang === "en" ? "Location:" : "स्थान:"}
                  </strong>{" "}
                  {issue.location}
                </p>
                <p className="muted small">
                  <strong>
                    {lang === "en" ? "Reported by:" : "रिपोर्ट किया गया:"}
                  </strong>{" "}
                  {issue.name}
                </p>
                <p className="muted small">
                  <strong>{lang === "en" ? "Date:" : "तारीख:"}</strong>{" "}
                  {issue.date}
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
              <strong>
                {lang === "en" ? "Location:" : "स्थान:"}
              </strong>{" "}
              {selectedIssue.location}
            </p>
            <p>
              <strong>
                {lang === "en" ? "Reported by:" : "रिपोर्ट किया गया:"}
              </strong>{" "}
              {selectedIssue.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedIssue.email}
            </p>
            <p>
              <strong>{lang === "en" ? "Date:" : "तारीख:"}</strong>{" "}
              {selectedIssue.date}
            </p>

            <hr />

            <p>
              <strong>
                {lang === "en" ? "Description:" : "विवरण:"}
              </strong>
            </p>
            <p>{selectedIssue.issue}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Browse;
