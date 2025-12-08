import { statisticsData } from '../../constants/data';
import { Home, Smile, CheckCircle, Users } from 'lucide-react';
import './Statistics.css';

const iconMap = {
  Home,
  Smile,
  CheckCircle,
  Users,
};

export default function Statistics() {
  return (
    <section className="statistics">
      <div className="statistics-container">
        <div className="section-header">
          <h2>Our Impact</h2>
          <p>Trusted by millions of people worldwide</p>
        </div>

        <div className="stats-grid">
          {statisticsData.map((stat) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div key={stat.id} className="stat-card">
                <div className="stat-icon">
                  {IconComponent ? <IconComponent size={40} /> : stat.icon}
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
