'use client';

import { useState } from 'react';
import { CookieBanner } from '@/components/CookieBanner';
import { FadeInSection } from '@/components/FadeInSection';
import { PhoneMockup } from '@/components/PhoneMockup';
import { PostieLogo } from '@/components/PostieLogo';
import { WaitlistForm } from '@/components/WaitlistForm';
import { useWaitlistSubmit } from '@/hooks/useWaitlistSubmit';

const stroke = 'stroke-stamp-blue';

function IconEnvelope({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="4" y="8" width="32" height="24" rx="2" className={stroke} strokeWidth={1.75} />
      <path d="M4 12l16 12 16-12" className={stroke} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShieldCheck({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M20 4L8 9v9c0 8 5.5 14 12 16 6.5-2 12-8 12-16V9L20 4z"
        className={stroke}
        strokeWidth={1.75}
        strokeLinejoin="round"
      />
      <path d="M14 20l4 4 8-8" className={stroke} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLetterboxClock({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="6" y="10" width="28" height="22" rx="2" className={stroke} strokeWidth={1.75} />
      <path d="M6 16h28" className={stroke} strokeWidth={1.75} />
      <circle cx="20" cy="25" r="5" className={stroke} strokeWidth={1.75} />
      <path d="M20 23v2.5l1.5 1" className={stroke} strokeWidth={1.75} strokeLinecap="round" />
    </svg>
  );
}

function IconLock({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="7" y="14" width="18" height="14" rx="2" className={stroke} strokeWidth={1.75} />
      <path d="M10 14V11a6 6 0 0112 0v3" className={stroke} strokeWidth={1.75} strokeLinecap="round" />
    </svg>
  );
}

function IconEyeOff({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M4 4l24 24M10 10c-2.5 2-4 4.5-4 6s3 8 10 8c2 0 3.5-.5 5-1.5M22 22c2.5-2 4-4.5 4-6s-3-8-10-8c-1.5 0-3 .3-4.2.8"
        className={stroke}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.5a3 3 0 014 4M6 8c3.5-2 7-3 10-3s6.5 1 10 3M6 24c3.5 2 7 3 10 3s6.5-1 10-3"
        className={stroke}
        strokeWidth={1.75}
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShieldTick({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 4L6 8v8c0 6 4 11 10 13 6-2 10-7 10-13V8l-10-4z"
        className={stroke}
        strokeWidth={1.75}
        strokeLinejoin="round"
      />
      <path d="M11 16l4 4 7-7" className={stroke} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const faqItems = [
  {
    q: 'What is Postie?',
    a: 'Postie is a mobile app that connects to your existing email and surfaces only the letters that matter, from verified organisations like your bank, your council, and the NHS. Everything else stays out of sight.',
  },
  {
    q: 'How does Postie know which emails are real post?',
    a: 'We maintain a database of verified UK organisations. Every sender is checked by our team before they appear in Postie. If an organisation is not on our list, their emails will not appear in your Postbox.',
  },
  {
    q: 'Do I need to change my email address?',
    a: 'No. Postie works with the email account you already have. You sign in once and Postie does the rest. Your existing inbox is not affected.',
  },
  {
    q: 'Is my email data safe?',
    a: 'Postie never stores your emails on our servers. We scan your inbox to identify verified letters, but your email content stays in your email account. We do not sell data and we do not show adverts.',
  },
  {
    q: 'When is Postie launching?',
    a: 'Postie is launching in the UK in Spring 2026 on iOS and Android. Join the waitlist to be among the first to try it.',
  },
  {
    q: 'Is Postie free?',
    a: 'We will share pricing details closer to launch. Join the waitlist to be the first to know.',
  },
];

export default function Home() {
  const { handleSubmit, isLoading, isJoined } = useWaitlistSubmit();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-aged-paper/80 bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#" className="flex shrink-0 items-center">
            <PostieLogo heightClass="h-8 md:h-9" />
          </a>
          <a
            href="#hero-waitlist"
            className="rounded-xl bg-stamp-blue px-5 py-2.5 font-sans text-sm text-warm-white transition hover:bg-stamp-blue/90 md:text-base"
          >
            Join the waitlist
          </a>
        </div>
      </header>

      <main className="pt-[72px] font-sans font-normal text-charcoal">
        {/* Hero */}
        <FadeInSection className="bg-cream px-5 pb-16 pt-10 md:min-h-0 md:px-8 md:pb-20 md:pt-16 lg:pt-[120px]">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h1 className="font-serif text-5xl leading-tight text-charcoal md:text-7xl md:leading-[1.05]">
                Only the post that matters.
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-charcoal md:text-[1.25rem]">
                Postie is your trusted digital letterbox. It connects to your email, filters out the noise, and delivers
                only verified letters from the organisations you trust.
              </p>
              <div id="hero-waitlist" className="mt-10 scroll-mt-28">
                <WaitlistForm onSubmit={handleSubmit} isLoading={isLoading} isJoined={isJoined} variant="default" />
              </div>
              <p className="mt-4 font-sans text-sm text-charcoal/85 md:text-base">
                UK launch. Spring 2026. iOS and Android.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </FadeInSection>

        {/* How it works */}
        <FadeInSection className="bg-cream px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-serif text-3xl text-charcoal md:text-4xl">How Postie works</h2>
            <div className="mt-16 md:mt-20">
              <div className="grid gap-14 md:grid-cols-3 md:gap-0">
                {[
                  {
                    n: 1,
                    icon: <IconEnvelope />,
                    title: 'Connect your email',
                    body: 'Sign in with your existing email account. Google, Microsoft, Yahoo, and more. Postie reads your inbox so you do not have to.',
                  },
                  {
                    n: 2,
                    icon: <IconShieldCheck />,
                    title: 'We find your real post',
                    body: 'Every sender is verified against our database of trusted organisations. Banks, councils, utilities, the NHS. If they are not verified, they are not in Postie.',
                  },
                  {
                    n: 3,
                    icon: <IconLetterboxClock />,
                    title: 'Delivered to your door',
                    body: 'Your letters arrive in your Postbox at 9am each morning. One delivery. No spam. No scams. Just the post that matters.',
                  },
                ].map((step, i) => (
                  <div
                    key={step.n}
                    className={`relative flex flex-col items-center text-center ${i < 2 ? 'md:border-r md:border-aged-paper/70 md:pr-8' : ''} ${i > 0 ? 'md:pl-8' : ''}`}
                  >
                    <div className="flex w-full flex-col items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-stamp-blue font-serif text-xl text-warm-white">
                        {step.n}
                      </div>
                    </div>
                    <div className="mt-6 flex justify-center md:mt-8">{step.icon}</div>
                    <h3 className="mt-4 font-serif text-xl text-charcoal">{step.title}</h3>
                    <p className="mt-3 max-w-sm text-base leading-relaxed text-charcoal/85 md:mx-auto">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Features */}
        <FadeInSection className="bg-warm-white px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-serif text-3xl text-charcoal md:text-4xl">Built around trust</h2>
            <div className="mt-8 space-y-20 md:mt-12 md:space-y-28">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
                <div className="order-2 flex min-h-0 flex-col justify-center lg:order-1">
                  <h3 className="font-serif text-2xl text-charcoal md:text-3xl">One delivery. Every morning.</h3>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-charcoal/85">
                    Your verified letters arrive at 9am, ready to read. No constant notifications. No anxiety. Just a
                    single, calm moment to check your post.
                  </p>
                </div>
                <div className="order-1 flex items-center justify-center lg:order-2 lg:justify-end">
                  <PhoneMockup />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="bg-cream px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
              <div className="flex items-center justify-center lg:justify-start">
                <PhoneMockup />
              </div>
              <div className="flex min-h-0 flex-col justify-center">
                <h3 className="font-serif text-2xl text-charcoal md:text-3xl">Everything filed. Nothing lost.</h3>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-charcoal/85">
                  Every letter you have read moves to your Shoebox, organised and searchable. Bank statements, council
                  tax, appointment letters. All in one place, whenever you need them.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="bg-warm-white px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
              <div className="order-2 flex min-h-0 flex-col justify-center lg:order-1">
                <h3 className="font-serif text-2xl text-charcoal md:text-3xl">Time-sensitive post, delivered immediately.</h3>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-charcoal/85">
                  Some things cannot wait until morning. Password resets, two-factor codes, urgent appointment changes.
                  Postie knows the difference and delivers them straight away.
                </p>
              </div>
              <div className="order-1 flex items-center justify-center lg:order-2 lg:justify-end">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Privacy */}
        <FadeInSection className="border-t border-aged-paper/40 bg-warm-white px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">Always private. Always ad-free.</h2>
            <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-charcoal/85">
              Postie never stores your emails. We never sell your data. We never show you adverts. Your letterbox is
              yours and yours alone.
            </p>
            <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
              {[
                {
                  icon: <IconLock className="mx-auto h-8 w-8" />,
                  title: 'No data stored',
                  text: 'Postie scans your inbox to find verified letters but never copies or stores your email content.',
                },
                {
                  icon: <IconEyeOff className="mx-auto h-8 w-8" />,
                  title: 'No adverts. Ever.',
                  text: 'Postie is funded by its users, not advertisers. Your attention is not for sale.',
                },
                {
                  icon: <IconShieldTick className="mx-auto h-8 w-8" />,
                  title: 'Verified senders only',
                  text: 'Every organisation in Postie is checked by hand. No exceptions.',
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl bg-cream p-6 text-left md:p-8">
                  <div className="mb-4 flex justify-center md:justify-start">{card.icon}</div>
                  <h4 className="text-lg text-charcoal [font-family:var(--font-arsenica),Georgia,serif]">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/85">{card.text}</p>
                </div>
              ))}
            </div>
            <a href="#" className="mt-10 inline-block font-sans text-stamp-blue underline-offset-4 hover:underline">
              Read our privacy promise
            </a>
          </div>
        </FadeInSection>

        {/* FAQ */}
        <FadeInSection className="bg-cream px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-center font-serif text-3xl text-charcoal md:text-4xl">Questions</h2>
            <ul className="mt-12 space-y-2">
              {faqItems.map((item, index) => {
                const open = openFaq === index;
                return (
                  <li key={item.q} className="rounded-xl border border-charcoal/10 bg-warm-white">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-charcoal md:px-6 md:py-5"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : index)}
                    >
                      <span className="text-base md:text-lg">{item.q}</span>
                      <span className="shrink-0 text-stamp-blue" aria-hidden>
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    {open && (
                      <div className="border-t border-charcoal/10 px-5 pb-5 pt-3 md:px-6 md:pb-6">
                        <p className="text-base leading-relaxed text-charcoal/85">{item.a}</p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </FadeInSection>

        {/* Final CTA */}
        <FadeInSection className="bg-stamp-blue px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-warm-white md:text-4xl">Your letterbox is waiting.</h2>
            <p className="mt-4 text-lg text-warm-white/95">Join the waitlist and be among the first to experience Postie.</p>
            <div className="mt-10">
              <WaitlistForm onSubmit={handleSubmit} isLoading={isLoading} isJoined={isJoined} variant="inverse" />
            </div>
          </div>
        </FadeInSection>

        {/* Footer */}
        <footer className="bg-charcoal px-5 py-12 text-warm-white md:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:items-center">
            <div className="flex justify-center md:justify-start">
              <PostieLogo className="text-warm-white" heightClass="h-7 md:h-8" />
            </div>
            <p className="text-center text-sm text-aged-paper">Made in the UK</p>
            <div className="flex flex-wrap items-center justify-center gap-3 font-sans text-sm md:justify-end">
              <a href="#" className="text-warm-white/90 hover:underline">
                Privacy
              </a>
              <span className="text-aged-paper" aria-hidden>
                |
              </span>
              <a href="#" className="text-warm-white/90 hover:underline">
                Contact
              </a>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-6xl text-center text-sm text-warm-white/70">
            © 2026 Postie. All rights reserved.
          </p>
        </footer>
      </main>

      <CookieBanner />
    </>
  );
}
