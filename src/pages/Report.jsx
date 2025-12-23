import { useState } from "react";
import { Link } from "react-router-dom";

const Report = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [issue, setIssue] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // === Same validation as script.js ===
    if (!name || !email || !location || !issue) {
      alert("⚠️ Please fill all required fields before submitting.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const newIssue = {
        name,
        email,
        location,
        issue,
        image: imageFile ? reader.result : "",
        date: new Date().toLocaleDateString(),
      };

      const issues = JSON.parse(localStorage.getItem("issues")) || [];
      issues.push(newIssue);

      localStorage.setItem("issues", JSON.stringify(issues));
      localStorage.setItem("totalIssues", issues.length);

      alert("✅ Issue submitted successfully!");

      // Reset form (same behavior)
      setName("");
      setEmail("");
      setLocation("");
      setIssue("");
      setImageFile(null);
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      reader.onload(); // trigger without image
    }
  };

  return (
    <main>
      <section className="container form-section">
        <div className="form-card">
          <h2>Report an Issue</h2>
          <p className="muted">
            Please fill the form with details and upload a photo to help
            authorities act faster.
          </p>

          <form className="report-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="location">Location / Address</label>
              <input
                id="location"
                type="text"
                placeholder="Street, area, city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="issue">Issue Description</label>
              <textarea
                id="issue"
                rows="5"
                placeholder="Describe the issue"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-row">
              <label htmlFor="imageUpload">Upload Photo</label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
              <small className="muted small">
                Optional but very helpful
              </small>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Submit Report
              </button>
              <Link to="/browse" className="btn btn-outline">
                Browse Issues
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Report;
