import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { footerData } from '../../constants/data';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Estateo</h3>
            <p>Your trusted partner in finding the perfect home.</p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/mohamed.bdawod.5"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a href="https://x.com/MooDawood" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-basyouni-dawood/"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/mohamed__dawood23/"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {['company', 'services', 'support', 'legal'].map((section) => (
            <div key={section} className="footer-section">
              <h4>{footerData[section].title}</h4>
              <ul>
                {footerData[section].links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>
              <strong>Email:</strong> {footerData.contact.email}
            </p>
            <p>
              <strong>Phone:</strong> {footerData.contact.phone}
            </p>
            <p>
              <strong>Address:</strong> {footerData.contact.address}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Estateo. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
