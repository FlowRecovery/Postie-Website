'use client';

import { useState, FormEvent } from 'react';

interface WaitlistResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const email = emailInput.value.trim();
    if (!email) return;

    setIsLoading(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json() as WaitlistResponse;

      if (!res.ok) {
        alert(data.error || 'Failed to join waitlist');
        return;
      }

      form.reset();
      setIsJoined(true);
      setTimeout(() => setIsJoined(false), 3000);
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-aged-paper">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="mb-8">
          <img src="/logo.svg" alt="Postie" className="h-16 mx-auto mb-8" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
          Only emails that matter.<br />Delivered once a day.
        </h1>
        <p className="text-xl text-charcoal/80 mb-12 max-w-2xl mx-auto">
          Curated email for busy professionals. Whitelisted partners only.
        </p>
        <a 
          href="#waitlist" 
          className="inline-block bg-vintage-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vintage-red/90 transition"
        >
          Join the Waitlist
        </a>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white border-2 border-stamp-blue rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                <path d="M16 4L4 9v7c0 7 5.5 12 12 14 6.5-2 12-7 12-14V9L16 4z" fill="#1E3A8A" stroke="#1E3A8A" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">Protected Inbox</h3>
            <p className="text-charcoal/70">Only vetted organisations can reach you. No phishing, no spam, no noise.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white border-2 border-stamp-blue rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                <path d="M4 8l12 10 12-10v14H4V8z" fill="#1E3A8A" stroke="#1E3A8A" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M4 8l12 10 12-10" stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">One Daily Delivery</h3>
            <p className="text-charcoal/70">Your post arrives at your chosen time. Check once, get on with your day.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white border-2 border-stamp-blue rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                <circle cx="16" cy="16" r="10" stroke="#1E3A8A" strokeWidth="1.5"/>
                <circle cx="16" cy="16" r="4" fill="#1E3A8A"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">Beautiful & Simple</h3>
            <p className="text-charcoal/70">Designed for everyone. No technical knowledge required.</p>
          </div>
        </div>
      </section>

      {/* Trusted Partners Hint */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center border-t border-charcoal/10">
        <h2 className="text-2xl font-semibold text-charcoal mb-4">Trusted by Leading Organisations</h2>
        <p className="text-charcoal/70 mb-8">
          Banks, utilities, and essential services delivering to Postie users.
        </p>
        <div className="text-sm text-charcoal/60">
          Partnership enquiries: <a href="mailto:partners@getpostie.app" className="text-stamp-blue hover:underline">partners@getpostie.app</a>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="max-w-2xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-charcoal mb-4 text-center">Join the Waitlist</h2>
          <p className="text-charcoal/70 mb-8 text-center">
            Be among the first to experience email reimagined.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-stamp-blue"
              required
              disabled={isLoading || isJoined}
            />
            <button 
              type="submit"
              disabled={isLoading || isJoined}
              className="w-full bg-vintage-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-vintage-red/90 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isJoined ? '✓ Joined!' : isLoading ? 'Joining...' : 'Request Early Access'}
            </button>
          </form>
          <p className="text-sm text-charcoal/60 mt-6 text-center">
            UK launch only. iOS app coming Spring 2026.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 mt-16 border-t border-charcoal/10">
        <div className="text-center text-charcoal/60 text-sm">
          <p>&copy; 2026 Postie. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}