import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { validateVerificationCode } from '../../utils/validation';
import './EmailVerification.css';

export default function EmailVerification() {
  const [code, setCode] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { verifyEmail, user } = useAuth();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(value);
    if (errors.code) {
      setErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate code
    if (!validateVerificationCode(code)) {
      setErrors({ code: 'Please enter a valid 6-digit code' });
      toast.error('Please enter a valid 6-digit verification code');
      return;
    }

    setLoading(true);
    try {
      const response = await verifyEmail(code);

      if (response.success) {
        toast.success('Email verified successfully!');
        setSubmitted(true);
        setCode('');
        setTimeout(() => navigate('/'), 2000);
      } else {
        toast.error(response.message || 'Email verification failed');
      }
    } catch (error) {
      const errorMessage =
        error.message || 'Email verification failed. Please try again';
      toast.error(errorMessage);
      console.error('Email verification error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="email-verification-container">
        <div className="email-verification-form">
          <p>Please sign up first to verify your email</p>
        </div>
      </div>
    );
  }

  return (
    <div className="email-verification-container">
      <form onSubmit={handleSubmit} className="email-verification-form">
        <h2>Verify Your Email</h2>
        <p className="form-subtitle">
          We've sent a verification code to <strong>{user.email}</strong>
        </p>

        {submitted ? (
          <div className="success-message">
            <p>✓ Email verified successfully!</p>
            <p>Your account is now fully activated.</p>
            <p className="redirect-text">Redirecting to home...</p>
          </div>
        ) : (
          <>
            {/* Verification Code Field */}
            <div className="form-group">
              <label htmlFor="code">Verification Code *</label>
              <input
                type="text"
                id="code"
                inputMode="numeric"
                placeholder="000000"
                maxLength="6"
                value={code}
                onChange={handleChange}
                className={errors.code ? 'input-error' : ''}
              />
              {errors.code && (
                <span className="error-message">{errors.code}</span>
              )}
              <p className="code-hint">
                Enter the 6-digit code sent to your email
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || code.length !== 6}
              className="submit-btn"
            >
              {loading ? 'Verifying...' : 'Verify Email'}
            </button>
          </>
        )}

        <p className="resend-link">
          Didn't receive the code?{' '}
          <button
            type="button"
            className="resend-btn"
            onClick={() => toast.info('Check your email or contact support')}
          >
            Resend
          </button>
        </p>
      </form>
    </div>
  );
}
