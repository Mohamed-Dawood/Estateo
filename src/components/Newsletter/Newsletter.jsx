import { useState } from 'react';
import { Mail } from 'lucide-react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <Mail className="newsletter-icon" size={48} />
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Get the latest real estate tips, market updates, and exclusive
            offers delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          {submitted && (
            <div className="success-message">
              Thank you! Check your email for confirmation.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
