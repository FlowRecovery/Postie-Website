'use client';

import { useState } from 'react';

type PostieLogoProps = {
  className?: string;
  heightClass?: string;
};

export function PostieLogo({ className = '', heightClass = 'h-8' }: PostieLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`font-serif text-xl text-charcoal ${className}`} aria-label="Postie">
        Postie
      </span>
    );
  }

  return (
    <img
      src="/logo.svg"
      alt="Postie"
      className={`${heightClass} w-auto object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
