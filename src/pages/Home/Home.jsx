import { Link } from 'react-router-dom';
import './Home.css';
import HomeImage from '../../assets/Images/Home/1 (11).png';
import Testimonials from '../../components/Testimonials/Testimonials';
import Team from '../../components/Team/Team';
import Statistics from '../../components/Statistics/Statistics';
import Partners from '../../components/Partners/Partners';
import Newsletter from '../../components/Newsletter/Newsletter';


export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Discover A Place <br />
            you'll love to live
          </h1>
          <p className="home-description">
            Estateo is a real estate solution that gives you the local scoop
            about homes. Search confidently with your trusted source of homes
            for sale or rent.
          </p>
          <div className="home-buttons">
            <Link to="/properties" className="home-button primary">
              Explore Properties
            </Link>
            <Link to="/contact" className="home-button secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="home-image">
          <img src={HomeImage} alt="Modern home exterior" />
        </div>
      </div>

      <Statistics />
      <Testimonials />
      <Team />
      <Partners />
      <Newsletter />
    </div>
  );
}
