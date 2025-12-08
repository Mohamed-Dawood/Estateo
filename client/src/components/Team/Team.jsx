import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { teamData } from '../../constants/data';
import './Team.css';

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = window.innerWidth > 768 ? 3 : 1;

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerSlide) % teamData.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerSlide + teamData.length) % teamData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleTeamMembers = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    visibleTeamMembers.push(teamData[(currentIndex + i) % teamData.length]);
  }

  return (
    <section className="team">
      <div className="team-container">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>
            Expert professionals dedicated to helping you find your perfect home
          </p>
        </div>

        <div className="team-slider">
          <button className="slider-btn prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>

          <div className="team-cards">
            {visibleTeamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="slider-dots">
          {[...Array(Math.ceil(teamData.length / itemsPerSlide))].map(
            (_, index) => (
              <div
                key={index}
                className={`dot ${
                  index * itemsPerSlide === currentIndex ? 'active' : ''
                }`}
                onClick={() => setCurrentIndex(index * itemsPerSlide)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
