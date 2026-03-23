'use client';

import { useState, FormEvent, useCallback } from 'react';

export interface WaitlistResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export function useWaitlistSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
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

      const data = (await res.json()) as WaitlistResponse;

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
  }, []);

  return { handleSubmit, isLoading, isJoined };
}
