import { useState } from 'react';
import { contactData } from '../../constants/data';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>{contactData.title}</h1>
        <p>{contactData.description}</p>
      </div>

      <div className="contact-container">
        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Send us a Message</h2>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
            {submitted && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>

        <div className="contact-info-section">
          <h2>Our Offices</h2>
          <div className="offices-grid">
            {contactData.offices.map((office) => (
              <div key={office.id} className="office-card">
                <h3>{office.city}</h3>
                <p>
                  <strong>Address:</strong> {office.address}
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${office.phone}`}>{office.phone}</a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${office.email}`}>{office.email}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
