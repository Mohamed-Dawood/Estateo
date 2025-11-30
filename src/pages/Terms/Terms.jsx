import { termsData } from '../../constants/data';
import './Terms.css';

export default function Terms() {
  return (
    <div className="terms-page">
      <div className="terms-header">
        <h1>{termsData.title}</h1>
        <p>Last Updated: {termsData.lastUpdated}</p>
      </div>

      <div className="terms-container">
        {termsData.sections.map((section) => (
          <section key={section.id} className="terms-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}

        <section className="terms-section contact-terms">
          <h2>Questions About Our Terms?</h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at{' '}
            <a href="mailto:mohamedbasyonydawood@gmail.com">
              mohamedbasyonydawood@gmail
            </a>{' '}
            or call us at <a href="tel:+201062842697">+201062842697</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
