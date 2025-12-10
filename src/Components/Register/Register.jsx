import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!email || !password || !displayName) {
      setError('Please fill all required fields');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with display name and photo URL
      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL || 'https://via.placeholder.com/150'
      });

      // Reset form
      setEmail('');
      setPassword('');
      setDisplayName('');
      setPhotoURL('');
      
      // Navigate to home or login
      navigate('/');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Email is already in use');
      } else if (err.code === 'auth/weak-password') {
        setError('Password is too weak. Please use a stronger password');
      } else {
        setError(err.message || 'Registration failed');
      }
    } finally {
      setLoading(false);
    }
  };

  // Google Registration
  const handleGoogleRegister = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Google registration failed');
    } finally {
      setLoading(false);
    }
  };

  // GitHub Registration
  const handleGitHubRegister = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithPopup(auth, githubProvider);
      navigate('/');
    } catch (err) {
      setError(err.message || 'GitHub registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8 border-2 border-red-700">
        <div className="flex justify-center mb-4">
          <img src="/f1-logo.svg" alt="FORMULA 1" className="h-12 w-auto hidden" />
        </div>
        <h2 className="text-3xl font-bold text-center text-red-700 mb-2">FORMULA 1 Registration</h2>
        <p className="text-center text-gray-300 mb-6">Join the FORMULA 1 community</p>
        
        {error && (
          <div className="mb-4 p-4 bg-red-900 border border-red-600 text-red-100 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-medium mb-2">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2 border border-red-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-yellow-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-red-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-yellow-400"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-red-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-yellow-400"
              placeholder="Minimum 6 characters"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Photo URL (Optional)</label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-2 border border-red-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-yellow-400"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-700 text-white font-bold py-2 rounded-lg hover:bg-red-800 transition disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        {/* Social Registration Buttons */}
        <div className="space-y-3 mt-6 mb-6">
          <button
            onClick={handleGoogleRegister}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-white border-2 border-red-700 text-gray-700 font-bold py-2 rounded-lg hover:bg-red-50 transition disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>

          <button
            onClick={handleGitHubRegister}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-black border-2 border-yellow-400 text-yellow-400 font-bold py-2 rounded-lg hover:bg-gray-900 transition disabled:opacity-50"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Sign up with GitHub
          </button>
        </div>

        <p className="text-center text-gray-300 mt-4">
          Already have an account? 
          <Link to="/login" className="text-yellow-400 hover:text-yellow-300 ml-2 font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
