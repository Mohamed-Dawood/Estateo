import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { validateForgotPassword } from '../../utils/validation';
import './ForgotPassword.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { forgotPassword } = useAuth();

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForgotPassword(email);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fix the errors in the form');
      return;
    }

    setLoading(true);
    try {
      const response = await forgotPassword(email);

      if (response.success) {
        toast.success('Password reset email sent! Check your inbox');
        setSubmitted(true);
        setEmail('');
        setTimeout(() => navigate('/signin'), 3000);
      } else {
        toast.error(response.message || 'Failed to send reset email');
      }
    } catch (error) {
      const errorMessage =
        error.message || 'Failed to send reset email. Please try again';
      toast.error(errorMessage);
      console.error('Forgot password error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <h2>Reset Password</h2>
        <p className="form-subtitle">
          Enter your email to receive a password reset link
        </p>

        {submitted ? (
          <div className="success-message">
            <p>✓ Email sent successfully!</p>
            <p>Please check your email for password reset instructions.</p>
            <p className="redirect-text">Redirecting to Sign In...</p>
          </div>
        ) : (
          <>
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'Sending Email...' : 'Send Reset Link'}
            </button>
          </>
        )}

        {/* Back to Sign In */}
        <p className="auth-link">
          Remember your password? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
