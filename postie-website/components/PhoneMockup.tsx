export function PhoneMockup({ className = '' }: { className?: string }) {
  return (
    <div
      className={`mx-auto flex aspect-[9/19] max-h-[520px] w-full max-w-[260px] flex-col items-center justify-center rounded-[20px] border-2 border-charcoal bg-cream px-6 py-10 text-center ${className}`}
      aria-hidden
    >
      <p className="font-sans text-sm text-charcoal">App screenshot coming soon</p>
    </div>
  );
}
