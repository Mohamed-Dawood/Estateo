import { servicesData } from '../../constants/data';
import {
  Search,
  Video,
  BarChart3,
  User,
  DollarSign,
  TrendingUp,
} from 'lucide-react';
import './Services.css';

const iconMap = {
  Search,
  Video,
  BarChart3,
  User,
  DollarSign,
  TrendingUp,
};

export default function Services() {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive real estate solutions tailored to your needs</p>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {IconComponent ? <IconComponent size={40} /> : service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="service-link">
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
