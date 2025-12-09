import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import {
  validateResetPassword,
  getPasswordErrors,
} from '../../utils/validation';
import './ResetPassword.css';

export default function ResetPassword() {
  const { token } = useParams();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }

    // Calculate password strength
    if (name === 'password') {
      const passwordErrors = getPasswordErrors(value);
      setPasswordStrength(5 - passwordErrors.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error('Invalid or missing reset token');
      navigate('/forgot-password');
      return;
    }

    // Validate form
    const newErrors = validateResetPassword(
      formData.password,
      formData.confirmPassword
    );
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fix the errors in the form');
      return;
    }

    setLoading(true);
    try {
      const response = await resetPassword(token, formData.password);

      if (response.success) {
        toast.success('Password reset successful!');
        setSubmitted(true);
        setFormData({
          password: '',
          confirmPassword: '',
        });
        setTimeout(() => navigate('/signin'), 2000);
      } else {
        toast.error(response.message || 'Failed to reset password');
      }
    } catch (error) {
      const errorMessage =
        error.message || 'Failed to reset password. Please try again';
      toast.error(errorMessage);
      console.error('Reset password error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 1) return '#dc3545';
    if (passwordStrength <= 2) return '#fd7e14';
    if (passwordStrength <= 3) return '#ffc107';
    if (passwordStrength <= 4) return '#28a745';
    return '#20c997';
  };

  return (
    <div className="reset-password-container">
      <form onSubmit={handleSubmit} className="reset-password-form">
        <h2>Create New Password</h2>
        <p className="form-subtitle">Enter a new password for your account</p>

        {submitted ? (
          <div className="success-message">
            <p>✓ Password reset successful!</p>
            <p>You can now sign in with your new password.</p>
            <p className="redirect-text">Redirecting to Sign In...</p>
          </div>
        ) : (
          <>
            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">New Password *</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'input-error' : ''}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
              {formData.password && (
                <div className="password-strength">
                  <div className="strength-bar">
                    <div
                      className="strength-fill"
                      style={{
                        width: `${(passwordStrength / 5) * 100}%`,
                        backgroundColor: getPasswordStrengthColor(),
                      }}
                    />
                  </div>
                  <span
                    className="strength-text"
                    style={{ color: getPasswordStrengthColor() }}
                  >
                    Strength:{' '}
                    {
                      [
                        'Very Weak',
                        'Weak',
                        'Fair',
                        'Good',
                        'Strong',
                        'Very Strong',
                      ][passwordStrength]
                    }
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'input-error' : ''}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'Resetting Password...' : 'Reset Password'}
            </button>
          </>
        )}
      </form>
    </div>
  );
}
