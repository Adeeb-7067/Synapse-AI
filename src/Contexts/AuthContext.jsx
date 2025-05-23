import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { auth } from '../Firebase/Config'; // Correct path: go up one level to src, then into Firebase

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Register function
  async function register(email, password, username) {
    try {
      setError('');
      setLoading(true);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile with username
      await updateProfile(result.user, {
        displayName: username
      });
      
      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  // Login function
  async function login(email, password) {
    try {
      setError('');
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  // Logout function
  function logout() {
    return signOut(auth);
  }

  // Reset password function
  async function resetPassword(email) {
    try {
      setError('');
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
    resetPassword,
    error,
    setError,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}