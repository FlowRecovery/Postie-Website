'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'postie-cookie-consent';

export function CookieBanner() {
  const [hydrated, setHydrated] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setOpen(stored === null);
    } catch {
      setOpen(true);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || !open) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(id);
  }, [hydrated, open]);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  function reject() {
    try {
      localStorage.setItem(STORAGE_KEY, 'rejected');
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  if (!hydrated || !open) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-heading"
      className="fixed bottom-4 left-4 z-[100] w-[calc(100%-2rem)] max-w-[420px] rounded-xl border border-aged-paper/90 bg-cream p-5 shadow-[0_8px_30px_rgba(56,61,61,0.08)] md:left-6 md:bottom-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <h2 id="cookie-banner-heading" className="font-serif text-lg text-charcoal md:text-xl">
        We value your privacy
      </h2>
      <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/85 md:text-base">
        We use cookies to enhance your browsing experience and analyse our traffic. By clicking Accept All, you consent
        to our use of cookies.
      </p>
      <div className="mt-5 flex flex-row gap-3">
        <button
          type="button"
          onClick={reject}
          className="min-h-[44px] flex-1 rounded-xl border-2 border-stamp-blue bg-transparent px-4 py-2.5 font-sans text-sm text-stamp-blue transition hover:bg-stamp-blue/5 md:text-base"
        >
          Reject All
        </button>
        <button
          type="button"
          onClick={accept}
          className="min-h-[44px] flex-1 rounded-xl bg-stamp-blue px-4 py-2.5 font-sans text-sm text-warm-white transition hover:bg-stamp-blue/90 md:text-base"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
