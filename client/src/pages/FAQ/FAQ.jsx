import { useState } from 'react';
import { faqData } from '../../constants/data';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services</p>
      </div>

      <div className="faq-container">
        <div className="accordion">
          {faqData.map((item, index) => (
            <div key={item.id} className="accordion-item">
              <button
                className={`accordion-header ${
                  openIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <ChevronDown size={20} />
              </button>
              <div
                className={`accordion-content ${
                  openIndex === index ? 'open' : ''
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
