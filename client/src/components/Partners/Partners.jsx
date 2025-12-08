import { partnersData } from '../../constants/data';
import './Partners.css';

export default function Partners() {
  return (
    <section className="partners">
      <div className="partners-container">
        <div className="section-header">
          <h2>Our Partners</h2>
          <p>Trusted partnerships with leading organizations</p>
        </div>

        <div className="partners-grid">
          {partnersData.map((partner) => (
            <div key={partner.id} className="partner-card">
              <img src={partner.logo} alt={partner.name} />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
