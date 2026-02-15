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
          <svg viewBox="0 0 1000 350" className="h-16 mx-auto mb-8 fill-vintage-red" xmlns="http://www.w3.org/2000/svg" aria-label="Postie">
            <path d="M86.2,193.7v-3.5c0,0,36,0,36,0,21.6.5,38.2-5.3,49.4-18.3,11.2-13,16.8-30,16.8-51.1-.3-14.3-3-27.7-8.2-40.2-5.2-12.5-12.7-22.7-22.4-30.6-9.8-7.9-19.9-11-32.7-11.3,0,0-32.6-1.5-36,1.5s-2.5,6.8-2.5,13.1v213.3c0,14.3,3.2,24.4,9.6,30.4,6.4,6,15.5,9.2,27.5,9.8,1.8,0,2.7.5,2.7,1.6s-1,1.6-3.1,1.6c-13.3-.8-23-1.2-29.2-1.2h-61.2c-4.9,0-12.5.4-22.6,1.2-1.6,0-2.3-.5-2.3-1.4s.8-1.5,2.3-1.8c9.1-.5,16.1-3.8,20.9-9.8,4.8-6,7.2-16.1,7.2-30.4V77.9c0-14.3-2.4-24.4-7.2-30.4-4.8-6-11.8-9.2-20.9-9.8-1.8,0-2.7-.5-2.5-1.4.1-.9,1-1.4,2.5-1.4,6.8.5,12.9.2,21.2.2s17,.4,26.4.2c9.4-.3,60.3-.2,71.2-.2,35.6,0,64.9,5.7,83.7,19.9,18.7,14.2,28.1,34.4,28.1,60.6s-8.7,43-26.1,57.3c-17.4,14.3-42.5,20.7-75.5,20.7s-12.1.3-15.5,0h-37.2Z"/>
            <path d="M274.3,303.5c-14.4-7.7-25.7-18.5-33.9-32.6s-12.3-30-12.3-48,4.7-34.8,14-49.7c9.4-14.9,22.2-26.7,38.4-35.3,16.2-8.6,34.1-12.9,53.6-12.9s34.6,3.8,49.3,11.5c14.7,7.7,26.2,18.4,34.5,32.2,8.3,13.8,12.5,29.5,12.5,47.2s-4.7,34.9-14.2,50.1c-9.5,15.2-22.5,27.2-39,35.9-16.5,8.7-34.6,13.1-54.4,13.1s-34.1-3.8-48.6-11.5ZM379.2,293c8.4-8.4,12.7-20.9,12.7-37.2s-4.1-33.4-12.3-52.7c-8.2-19.2-18.5-35.6-30.8-48.9-12.4-13.4-24.4-20.1-36.1-20.1s-26,4.2-34.3,12.5c-8.3,8.3-12.5,20.8-12.5,37.4s4,33.1,12.1,52.5c8.1,19.4,18.3,35.8,30.6,49.1,12.3,13.4,24.2,20.1,35.7,20.1s26.5-4.2,34.9-12.7Z"/>
            <path d="M450.8,235.8c.3-1,.8-1.5,1.6-1.4.8.1,1.3.7,1.6,1.8.3,22.6,5.8,40.4,16.6,53.4,10.8,13,25.4,19.5,43.9,19.5s35.1-8.1,35.1-24.2c-.3-10.4-4.8-19.7-13.6-27.9-8.8-8.2-22.2-17.4-40.2-27.5-16.9-10.1-29.6-19.2-38-27.3-8.5-8.1-12.7-17.4-12.7-28.1s3.3-17.1,9.9-24.8c6.6-7.7,15.8-13.7,27.5-18.1,11.7-4.4,24.7-6.6,39-6.6s32.8,2.4,47.6,7.2c14.8,4.8,21.2,11.4,19.1,19.7l-12.1,46.8c-.3.8-.7,1.2-1.4,1.2s-1-.5-1-1.6c-1.8-44.7-21.8-67.1-60.1-67.1s-19.3,1.8-23.6,5.3-6.4,8.3-6.4,14.2,3.9,14.1,11.7,20.5c7.8,6.4,21.5,15.1,41,26.3,17.2,9.6,30.8,19.4,41,29.2,10.1,9.9,15.2,21.5,15.2,34.7s-3.5,19.3-10.5,27.5c-7,8.2-16.9,14.6-29.6,19.3-12.7,4.7-27.2,7-43.3,7s-23.9-1.4-35.1-4.1c-11.2-2.7-19.9-6.5-26.1-11.3-6.2-4.8-8.8-10.1-7.8-15.8l10.9-48Z"/>
            <path d="M632.5,302.1c-7-8.3-10.5-18.7-10.5-31.2v-126c0-3.9-.5-6.8-1.4-8.6-.9-1.8-3.2-2.7-6.8-2.7h-13.7c-1,0-1.6-.3-1.6-1s.5-1.1,1.6-1.4c14.8-2.6,28.4-9.1,40.8-19.5,12.3-10.4,20.7-23.5,25.2-39.4,0-1.6.5-2.3,1.6-2.3s1.2.8,1.2,2.3c-.3,20-.9,37-2,51.1,0,3.1.6,5.1,2,6,1.3.9,3.8.8,7.7.8h36.5c.5,0,.5,1,.4,1.9-.1.9-.8,1.4-2.1,1.4h-33.2c-4.4,0-7.4.7-9,2.1-1.6,1.4-2.3,4.1-2.3,8v115.8c0,9.6,2,17,5.8,22.2,3.9,5.2,8.8,7.8,14.8,7.8s9.8-1.7,15.2-5.1c5.5-3.4,10.7-8.2,15.6-14.4,1.3-1.3,2.2-1.7,2.7-1.2.5.5.3,1.4-.8,2.7-10.4,14.6-20.9,25.3-31.4,32.4-10.5,7-20.3,10.5-29.4,10.5s-19.9-4.2-26.9-12.5Z"/>
            <path d="M793.4,295.5c3.8,7.3,9.7,11.1,17.7,11.3,1.3,0,2,.5,2,1.4s-.7,1.4-2,1.4c-4.9-.3-20.2-.4-45.6-.4s-41.1.1-46,.4c-1.6,0-2.2-.5-2-1.6.3-1,1.3-1.6,3.1-1.6,14.8,0,22.2-12.7,22.2-38.2v-87.4c0-9.9-1.2-17.1-3.7-21.6-2.5-4.5-7.1-6.8-13.8-6.8s-3.5.3-6.6.8c-1,.3-1.6,0-1.8-1-.1-.9.2-1.5,1-1.8,12.2-2.9,24.8-6.6,37.6-11.3,12.9-4.7,23.3-9.8,31.4-15.2.8-.5,1.7-.8,2.7-.8s1.9.8,1.9,2.3c-1.6,14.6-2.6,25.9-3.1,33.9-.5,8.1-.8,17.4-.8,28.1v80.7c0,10.9,1.9,20,5.7,27.3ZM732.8,83.7c-5.3-2.9-8.3-7.1-9.1-12.5-1-6.7,1.4-12.9,7.2-18.6,5.7-5.7,13.5-9.2,23.3-10.7s14.5-.3,19.7,2.7c5.2,2.9,8.1,7.2,9,12.9s-1.4,12.8-7.2,18.4c-5.8,5.6-13.5,9-23.3,10.5s-14.2.2-19.5-2.7Z"/>
            <path d="M991.9,274.4c.6.5.7,1.2.2,2-10.1,12.5-22.4,22-36.7,28.5-14.3,6.5-29.2,9.8-44.8,9.8s-31.6-3.8-45.6-11.3-25.2-18.3-33.3-32.2c-8.2-13.9-12.3-30-12.3-48.2s4.5-34.4,13.5-49.5c9-15.1,21.1-27,36.5-35.7,15.3-8.7,32.1-13.1,50.3-13.1s37.2,5.5,50.7,16.6c13.5,11.1,21.7,27.8,22.9,46.7s2.6,26.7-7.8,26.8c-18.9.2-126,0-126,0,4.4,14.3,12.1,29.8,21.4,41.1,9.2,11.3,19.8,20.2,31.8,26.5,12,6.4,23.7,9.6,35.1,9.6,19,0,33.3-6,42.9-17.9.3-.3.7-.1,1.4.4ZM867.1,145.6c-7.7,9-11.5,22.4-11.5,40.4s.5,15,3.1,25.4c14.8-.3,80.7,0,86.4,0,2.3-3.9,3.3-8.3,3.3-14.1,0-8.6-2.4-18-7.2-28.3-4.8-10.3-10.9-19-18.3-26.1-7.4-7.1-14.9-10.7-22.4-10.7-14.6,0-25.7,4.5-33.3,13.5Z"/>
          </svg>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal mb-6">
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
                <path d="M16 4L4 9v7c0 7 5.5 12 12 14 6.5-2 12-7 12-14V9L16 4z" className="fill-stamp-blue stroke-stamp-blue" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">Protected Inbox</h3>
            <p className="text-charcoal/70">Only vetted organisations can reach you. No phishing, no spam, no noise.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white border-2 border-stamp-blue rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                <path d="M4 8l12 10 12-10v14H4V8z" className="fill-stamp-blue stroke-stamp-blue" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M4 8l12 10 12-10" className="stroke-stamp-blue" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">One Daily Delivery</h3>
            <p className="text-charcoal/70">Your post arrives at your chosen time. Check once, get on with your day.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white border-2 border-stamp-blue rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
                <circle cx="16" cy="16" r="10" className="stroke-stamp-blue" strokeWidth="1.5"/>
                <circle cx="16" cy="16" r="4" className="fill-stamp-blue"/>
              </svg>
            </div>
            <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">Beautiful & Simple</h3>
            <p className="text-charcoal/70">Designed for everyone. No technical knowledge required.</p>
          </div>
        </div>
      </section>

      {/* Trusted Partners Hint */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center border-t border-charcoal/10">
        <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">Trusted by Leading Organisations</h2>
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
          <h2 className="font-serif text-3xl font-bold text-charcoal mb-4 text-center">Join the Waitlist</h2>
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