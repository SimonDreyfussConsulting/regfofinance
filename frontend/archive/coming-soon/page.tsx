'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ComingSoon() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated
    if (typeof window !== 'undefined') {
      const isAuthenticated = sessionStorage.getItem('rff_authenticated');
      if (isAuthenticated === 'true') {
        router.push('/');
      }
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple authentication - in production, use proper authentication
    // Default credentials: username="admin", password="preview2025"
    if (username === 'admin' && password === 'preview2025') {
      sessionStorage.setItem('rff_authenticated', 'true');
      router.push('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Main Coming Soon Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              RegularFolkFinance
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Coming Soon
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto rounded-full"></div>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-700 mb-4">
              We're putting the finishing touches on something special.
            </p>
            <p className="text-gray-600 text-sm">
              Real People. Real Money Moves. Real Results.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3 text-center">
              Get notified when we launch
            </h3>
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/regularfolkfinance"
              method="POST"
              target="_blank"
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                required
              />
              <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-semibold rounded-lg hover:shadow-lg transition">
                Notify Me
              </button>
            </form>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Preview Access
            </h2>
            <p className="text-sm text-gray-600">
              Enter credentials to preview the site
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            For preview access, contact the administrator
          </p>
        </div>
      </div>
    </div>
  );
}
