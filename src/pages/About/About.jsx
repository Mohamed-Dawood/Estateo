import { aboutData } from '../../constants/data';
import { Award, Eye, Target, Lightbulb, Users } from 'lucide-react';
import './About.css';

const valueIcons = {
  Transparency: Eye,
  Innovation: Lightbulb,
  'Customer Focus': Users,
  Integrity: Target,
};

export default function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-header">
        <h1>{aboutData.title}</h1>
        <p>{aboutData.description}</p>
      </div>

      <div className="about-container">
        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="mission">
            <Award size={36} className="icon" />
            <h2>Our Mission</h2>
            <p>{aboutData.mission}</p>
          </div>
          <div className="vision">
            <Eye size={36} className="icon" />
            <h2>Our Vision</h2>
            <p>{aboutData.vision}</p>
          </div>
        </section>

        {/* Core Values */}
        <section className="values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {aboutData.values.map((value) => {
              const IconComponent = valueIcons[value.title];
              return (
                <div key={value.id} className="value-card">
                  {IconComponent && (
                    <IconComponent size={36} className="value-icon" />
                  )}
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Story */}
        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            Estateo was founded in 2020 with a simple goal: to make real estate
            accessible and transparent for everyone. We recognized that finding
            the right property shouldn't be complicated or stressful.
          </p>
          <p>
            Today, we've grown to serve hundreds of thousands of customers
            across the country, helping them buy, sell, and rent properties with
            confidence. Our team of experts is dedicated to providing the best
            service and most accurate information to help you make informed
            decisions about your real estate journey.
          </p>
        </section>
      </div>
    </div>
  );
}
