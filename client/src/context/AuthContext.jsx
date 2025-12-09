import { createContext, useState, useContext, useEffect } from 'react';
import authAPI from '../services/authAPI';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Failed to parse stored user:', err);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  };

  const signup = async (formData) => {
    try {
      setError(null);
      const response = await authAPI.signup(formData);
      if (response.success) {
        login(response.user);
      }
      return response;
    } catch (err) {
      setError(err.message || 'Signup failed');
      throw err;
    }
  };

  const signin = async (email, password) => {
    try {
      setError(null);
      const response = await authAPI.signin(email, password);
      if (response.success) {
        login(response.user);
      }
      return response;
    } catch (err) {
      setError(err.message || 'Signin failed');
      throw err;
    }
  };

  const logoutUser = async () => {
    try {
      setError(null);
      await authAPI.logout();
      logout();
    } catch (err) {
      setError(err.message || 'Logout failed');
      logout();
    }
  };

  const verifyEmail = async (code) => {
    try {
      setError(null);
      const response = await authAPI.verifyEmail(code);
      return response;
    } catch (err) {
      setError(err.message || 'Email verification failed');
      throw err;
    }
  };

  const forgotPassword = async (email) => {
    try {
      setError(null);
      const response = await authAPI.forgotPassword(email);
      return response;
    } catch (err) {
      setError(err.message || 'Failed to send reset email');
      throw err;
    }
  };

  const resetPassword = async (token, password) => {
    try {
      setError(null);
      const response = await authAPI.resetPassword(token, password);
      return response;
    } catch (err) {
      setError(err.message || 'Password reset failed');
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        login,
        logout: logoutUser,
        signup,
        signin,
        verifyEmail,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
