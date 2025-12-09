import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Properties from './pages/Properties/Properties';
import PropertyDetails from './pages/PropertyDetails/PropertyDetails';

import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import EmailVerification from './pages/EmailVerification/EmailVerification';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import Terms from './pages/Terms/Terms';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
  return (
    <Router>
      <AuthProvider>
        <WishlistProvider>
          {/* Toast notifications */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          {/* Always on top */}
          <Navbar />

          {/* Page Content */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />
              <Route path="/about-us" element={<About />} />

              <Route path="/services" element={<Services />} />

              <Route path="/properties" element={<Properties />} />

              <Route path="/property/:id" element={<PropertyDetails />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/wishlist" element={<Wishlist />} />

              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/reset-password/:token"
                element={<ResetPassword />}
              />
              <Route path="/verify-email" element={<EmailVerification />} />

              <Route path="/faqs" element={<FAQ />} />

              <Route path="/terms" element={<Terms />} />
            </Routes>
          </div>

          {/* Always at the bottom */}
          <Footer />
        </WishlistProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
