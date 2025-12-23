import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("⚠️ Please fill all required fields before sending.");
      return;
    }

    alert("📨 Message sent successfully!");

    // Reset form (same behavior as original JS)
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main>
      <section className="container form-section">
        <div className="form-card small">
          <h2>Contact Us</h2>
          <p className="muted">
            Questions, partnership requests, or help — write to us.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="cname">Name</label>
              <input
                id="cname"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="cemail">Email</label>
              <input
                id="cemail"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="cmessage">Message</label>
              <textarea
                id="cmessage"
                rows="5"
                placeholder="How can we help?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>

          <div className="contact-details">
            <h4>Office</h4>
            <p className="muted small">
              123 Civic Avenue, City Name, Country
            </p>
            <p className="muted small">Phone: +91 98765 43210</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
