import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData } from '../../constants/data';
import './Testimonials.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>
            Read testimonials from satisfied clients who found their dream homes
          </p>
        </div>

        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-card">
            <img src={currentTestimonial.image} alt={currentTestimonial.name} />
            <div className="stars">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} size={20} fill="#ffc107" color="#ffc107" />
              ))}
            </div>
            <p className="testimonial-text">"{currentTestimonial.text}"</p>
            <h4>{currentTestimonial.name}</h4>
            <p className="role">{currentTestimonial.role}</p>
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="slider-dots">
          {testimonialsData.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
