import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import Terms from './pages/Terms/Terms';

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* Always on top */}
        <Navbar />

        {/* Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/projects" element={<div>Projects Page</div>} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/wishlist" element={<div>Wishlist Page</div>} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/faqs" element={<FAQ />} />

            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>

        {/* Always at the bottom */}
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
