'use client';

import type { FormEventHandler } from 'react';

type Variant = 'default' | 'inverse';

type WaitlistFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  isLoading: boolean;
  isJoined: boolean;
  variant?: Variant;
  id?: string;
};

export function WaitlistForm({
  onSubmit,
  isLoading,
  isJoined,
  variant = 'default',
  id,
}: WaitlistFormProps) {
  const isInverse = variant === 'inverse';

  return (
    <form id={id} className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch" onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="your.email@example.com"
        required
        disabled={isLoading || isJoined}
        className={
          isInverse
            ? 'min-h-[48px] flex-1 rounded-xl border-2 border-warm-white bg-transparent px-4 py-3 font-sans text-base text-warm-white placeholder:text-warm-white/70 focus:outline-none focus:ring-2 focus:ring-warm-white/50 disabled:opacity-70'
            : 'min-h-[48px] flex-1 rounded-xl border border-charcoal/15 bg-warm-white px-4 py-3 font-sans text-base text-charcoal placeholder:text-charcoal/45 focus:outline-none focus:ring-2 focus:ring-stamp-blue disabled:opacity-70'
        }
      />
      <button
        type="submit"
        disabled={isLoading || isJoined}
        className={
          isInverse
            ? 'min-h-[48px] shrink-0 rounded-xl bg-charcoal px-6 py-3 font-sans text-base text-warm-white transition hover:bg-charcoal/90 disabled:cursor-not-allowed disabled:opacity-70'
            : 'min-h-[48px] shrink-0 rounded-xl bg-vintage-red px-6 py-3 font-sans text-base text-warm-white transition hover:bg-vintage-red/90 disabled:cursor-not-allowed disabled:opacity-70'
        }
      >
        {isJoined ? 'Joined' : isLoading ? 'Joining…' : 'Join the waitlist'}
      </button>
    </form>
  );
}
