/**
 * Email validation
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Password validation
 * Requirements:
 * - At least 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 * - At least one special character
 */
export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Get password validation errors
 */
export const getPasswordErrors = (password) => {
  const errors = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  if (!/[@$!%*?&]/.test(password)) {
    errors.push(
      'Password must contain at least one special character (@$!%*?&)'
    );
  }

  return errors;
};

/**
 * Name validation
 */
export const validateName = (name) => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

/**
 * Verify code validation (6-digit code)
 */
export const validateVerificationCode = (code) => {
  return /^\d{6}$/.test(code);
};

/**
 * Form validation for signup
 */
export const validateSignup = (formData) => {
  const errors = {};

  if (!formData.name || !validateName(formData.name)) {
    errors.name = 'Name must be between 2 and 50 characters';
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  const passwordErrors = getPasswordErrors(formData.password || '');
  if (passwordErrors.length > 0) {
    errors.password = passwordErrors.join(', ');
  }

  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

/**
 * Form validation for signin
 */
export const validateSignin = (formData) => {
  const errors = {};

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.password || formData.password.length === 0) {
    errors.password = 'Password is required';
  }

  return errors;
};

/**
 * Form validation for forgot password
 */
export const validateForgotPassword = (email) => {
  const errors = {};

  if (!email || !validateEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  return errors;
};

/**
 * Form validation for reset password
 */
export const validateResetPassword = (password, confirmPassword) => {
  const errors = {};

  const passwordErrors = getPasswordErrors(password || '');
  if (passwordErrors.length > 0) {
    errors.password = passwordErrors.join(', ');
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
