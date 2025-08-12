'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, getSession, getCurrentUser, signOut as supabaseSignOut } from '@/lib/supabaseClient';
import type { User, Session, AuthError } from '@supabase/supabase-js';

interface AuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const clearError = () => setError(null);

  useEffect(() => {
    // Check if user is already authenticated on page load
    const checkAuth = async () => {
      try {
        const session = await getSession();
        if (session?.user) {
          setIsAuthenticated(true);
          setUserEmail(session.user.email || null);
          setUser(session.user);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setError('Failed to check authentication status');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        try {
          if (event === 'SIGNED_IN' && session?.user) {
            setIsAuthenticated(true);
            setUserEmail(session.user.email || null);
            setUser(session.user);
            setError(null);
          } else if (event === 'SIGNED_OUT') {
            setIsAuthenticated(false);
            setUserEmail(null);
            setUser(null);
            setError(null);
          } else if (event === 'TOKEN_REFRESHED' && session?.user) {
            // Token refreshed, update user info
            setIsAuthenticated(true);
            setUserEmail(session.user.email || null);
            setUser(session.user);
            setError(null);
          }
        } catch (error) {
          console.error('Auth state change error:', error);
          setError('Authentication state change failed');
        } finally {
          setLoading(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setError(null);
      setLoading(true);

      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        console.error('Login error:', authError);
        let errorMessage = 'Login failed';
        
        // Handle specific Supabase auth errors
        if (authError.message.includes('Invalid login credentials')) {
          errorMessage = 'Invalid email or password';
        } else if (authError.message.includes('Email not confirmed')) {
          errorMessage = 'Please verify your email address before signing in';
        } else if (authError.message.includes('Too many requests')) {
          errorMessage = 'Too many login attempts. Please try again later';
        } else {
          errorMessage = authError.message;
        }
        
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }

      if (data.user) {
        setIsAuthenticated(true);
        setUserEmail(data.user.email || null);
        setUser(data.user);
        setError(null);
        return { success: true };
      }

      const noUserError = 'Login failed - no user data received';
      setError(noUserError);
      return { success: false, error: noUserError };
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = 'An unexpected error occurred during login';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setError(null);
      setLoading(true);
      
      await supabaseSignOut();
      setIsAuthenticated(false);
      setUserEmail(null);
      setUser(null);
      setError(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
      setError('Logout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const value = {
    isAuthenticated,
    userEmail,
    user,
    login,
    logout,
    loading,
    error,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
