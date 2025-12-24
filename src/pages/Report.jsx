import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import translations from "../utils/lang";

const Report = () => {
  // 🌐 Language
  const lang = localStorage.getItem("lang") || "en";
  const t = translations[lang];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [issue, setIssue] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [coords, setCoords] = useState(null);

  /* ===============================
     AUTO GPS LOCATION (UNCHANGED)
     =============================== */
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
        setLocation(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`);
      },
      () => {}
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !location || !issue) {
      alert(
        lang === "en"
          ? "⚠️ Please fill all required fields before submitting."
          : "⚠️ कृपया सभी आवश्यक फ़ील्ड भरें।"
      );
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert(
        lang === "en"
          ? "⚠️ Please enter a valid email address."
          : "⚠️ कृपया एक मान्य ईमेल पता दर्ज करें।"
      );
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const newIssue = {
        name,
        email,
        location,
        issue,
        latitude: coords?.latitude || null,
        longitude: coords?.longitude || null,
        image: imageFile ? reader.result : "",
        date: new Date().toLocaleDateString(),
      };

      const issues = JSON.parse(localStorage.getItem("issues")) || [];
      issues.push(newIssue);

      localStorage.setItem("issues", JSON.stringify(issues));
      localStorage.setItem("totalIssues", issues.length);

      alert(
        lang === "en"
          ? "✅ Issue submitted successfully!"
          : "✅ समस्या सफलतापूर्वक दर्ज की गई!"
      );

      setName("");
      setEmail("");
      setLocation("");
      setIssue("");
      setImageFile(null);
      setCoords(null);
    };

    imageFile ? reader.readAsDataURL(imageFile) : reader.onload();
  };

  return (
    <main>
      <section className="container form-section">
        <div className="form-card">
          <h2>
            {lang === "en" ? "Report an Issue" : "समस्या दर्ज करें"}
          </h2>

          <p className="muted">
            {lang === "en"
              ? "Please fill the form with details and upload a photo to help authorities act faster."
              : "कृपया विवरण भरें और अधिकारियों की सहायता के लिए फोटो अपलोड करें।"}
          </p>

          <form className="report-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="name">
                {lang === "en" ? "Name" : "नाम"}
              </label>
              <input
                id="name"
                type="text"
                placeholder={lang === "en" ? "Your name" : "आपका नाम"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">
                {lang === "en" ? "Email" : "ईमेल"}
              </label>
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
              <label htmlFor="location">
                {lang === "en" ? "Location / Address" : "स्थान / पता"}
              </label>
              <input
                id="location"
                type="text"
                placeholder={
                  lang === "en"
                    ? "Fetching location..."
                    : "स्थान प्राप्त किया जा रहा है..."
                }
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <small className="muted small">
                {lang === "en"
                  ? "Auto-filled using GPS (you can edit)"
                  : "GPS द्वारा स्वतः भरा गया (आप बदल सकते हैं)"}
              </small>
            </div>

            <div className="form-row">
              <label htmlFor="issue">
                {lang === "en"
                  ? "Issue Description"
                  : "समस्या का विवरण"}
              </label>
              <textarea
                id="issue"
                rows="5"
                placeholder={
                  lang === "en"
                    ? "Describe the issue"
                    : "समस्या का विवरण लिखें"
                }
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-row">
              <label htmlFor="imageUpload">
                {lang === "en"
                  ? "Upload Photo / Capture"
                  : "फोटो अपलोड करें / कैमरा"}
              </label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                capture="environment"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
              <small className="muted small">
                {lang === "en"
                  ? "One-tap camera on mobile devices"
                  : "मोबाइल पर एक-टैप कैमरा"}
              </small>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {lang === "en" ? "Submit Report" : "रिपोर्ट सबमिट करें"}
              </button>
              <Link to="/browse" className="btn btn-outline">
                {lang === "en" ? "Browse Issues" : "समस्याएँ देखें"}
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Report;
