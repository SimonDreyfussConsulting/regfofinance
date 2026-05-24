'use client';

import { useState } from 'react';

export default function CTABox() {
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setSelected('');
    }, 3000);
  };

  return (
    <div className="bg-[#F3F4F6] border border-[#6B7280]/20 rounded-lg p-6 mt-8">
      <h3 className="font-bold text-xl mb-2 text-[#1F2937]">
        Find Your Next Credit Card
      </h3>
      <p className="text-sm text-[#6B7280] mb-4">
        Compare cards based on real user reviews
      </p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          Thanks! We'll send you our recommendations soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full p-3 border border-[#6B7280]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            required
          >
            <option value="">What are you looking for?</option>
            <option value="cash-back">Cash back rewards</option>
            <option value="travel">Travel rewards</option>
            <option value="balance-transfer">Balance transfer</option>
            <option value="building-credit">Building credit</option>
          </select>

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-[#6B7280]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#3B82F6] text-white font-semibold py-3 rounded-lg hover:bg-[#3B82F6]/90 transition-colors"
          >
            Get Recommendations
          </button>
        </form>
      )}

      <p className="text-xs text-[#6B7280] mt-3 text-center">
        Free. No impact on credit score.
      </p>
    </div>
  );
}
