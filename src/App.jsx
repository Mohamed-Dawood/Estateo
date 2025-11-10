import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/projects" element={<div>Projects Page</div>} />
              <Route path="/services" element={<div>Services Page</div>} />
              <Route path="/about-us" element={<div>About Us Page</div>} />
              <Route path="/contact" element={<div>Contact Us Page</div>} />
              <Route path="/cart" element={<div>Shopping Cart Page</div>} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
