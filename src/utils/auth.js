// Authentication utility functions

// Check if user is authenticated
export const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return !!user;
};

// Get current user
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Store user data after login
export const setUser = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

// Remove user data after logout
export const removeUser = () => {
  localStorage.removeItem('user');
};