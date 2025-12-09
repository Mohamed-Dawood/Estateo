import apiClient from './api';

const authAPI = {
  // Sign up endpoint
  signup: async (data) => {
    try {
      const response = await apiClient.post('/signup', data);
      if (response.data.success) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Signup failed' };
    }
  },

  // Sign in endpoint
  signin: async (email, password) => {
    try {
      const response = await apiClient.post('/signin', { email, password });
      if (response.data.success) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Signin failed' };
    }
  },

  // Verify email endpoint
  verifyEmail: async (code) => {
    try {
      const response = await apiClient.post('/verify-email', { code });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Email verification failed' };
    }
  },

  // Forgot password endpoint
  forgotPassword: async (email) => {
    try {
      const response = await apiClient.post('/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to send reset email' };
    }
  },

  // Reset password endpoint
  resetPassword: async (token, password) => {
    try {
      const response = await apiClient.post(`/reset-password/${token}`, {
        password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Password reset failed' };
    }
  },

  // Check auth endpoint
  checkAuth: async () => {
    try {
      const response = await apiClient.get('/check-auth');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Auth check failed' };
    }
  },

  // Get all users (admin endpoint)
  getAllUsers: async () => {
    try {
      const response = await apiClient.get('/');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch users' };
    }
  },

  // Logout endpoint
  logout: async () => {
    try {
      await apiClient.post('/logout');
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    } catch (error) {
      // Clear local storage even if logout request fails
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      throw error.response?.data || { message: 'Logout failed' };
    }
  },
};

export default authAPI;
