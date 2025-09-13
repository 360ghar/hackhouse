import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

type Mode = 'coliving' | 'coworking' | 'tour';

type Props = {
  open: boolean;
  onClose: () => void;
  mode?: Mode;
};

const FieldLabel: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-[#EAEAEA]/80 mb-2 tracking-wide" data-font-mono>
    {children}
  </label>
);

const InputBase = "w-full rounded-lg bg-[#121212]/70 border border-white/10 text-[#EAEAEA] placeholder-white/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--acc-cyan)]/70 focus:border-[var(--acc-cyan)]/40 transition";

const ApplicationFormModal: React.FC<Props> = ({ open, onClose, mode = 'coliving' }) => {
  const [state, handleSubmit] = useForm('xdkljezv');
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Focus first field when opened
  useEffect(() => {
    if (!open) return;
    const el = dialogRef.current?.querySelector('input, textarea, select') as HTMLElement | null;
    el?.focus();
  }, [open]);

  // Lock background scroll when modal is open
  useEffect(() => {
    const scroller = document.getElementById('scrollRoot');
    if (!scroller) return;
    if (open) {
      const prev = scroller.style.overflow;
      scroller.style.overflow = 'hidden';
      return () => { scroller.style.overflow = prev || 'auto'; };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-title"
        className="absolute inset-0 flex items-center justify-center p-4"
      >
        <div ref={dialogRef} className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overscroll-contain glass-pane rounded-2xl border border-white/10 shadow-2xl">
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[var(--acc-cyan)] to-[var(--acc-purple)]" />

          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="min-w-0">
                <h3 id="application-title" data-font-mono className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {mode === 'coworking' ? 'GET A DESK — COWORKING' : mode === 'tour' ? 'BOOK A TOUR' : 'APPLY FOR INITIATION'}
                </h3>
                <p className="text-sm text-[#EAEAEA]/70 mt-2 max-w-prose">
                  {mode === 'coworking'
                    ? 'Co-working from ₹3,000/mo. Join the founders’ floor with fast Wi‑Fi and events.'
                    : mode === 'tour'
                      ? 'Come see the space, vibe, and meet a coordinator.'
                      : 'Limited, curated residency spots. Tell us what you’re building.'}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="sm:ml-4 self-start text-white/70 hover:text-white transition"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-gradient-to-r from-[var(--acc-cyan)] to-[var(--acc-purple)] flex items-center justify-center shadow-lg shadow-[var(--acc-purple)]/30">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                    <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 data-font-mono className="text-2xl font-bold text-white">Thanks for applying!</h4>
                <p className="text-[#EAEAEA]/70 mt-2">We’ll review and get back soon.</p>
                <button onClick={onClose} className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--acc-cyan)] to-[var(--acc-purple)] text-black font-semibold">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <input id="name" name="name" required placeholder="Aarav Sharma" className={InputBase} />
                  </div>
                  <div>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <input id="email" type="email" name="email" required placeholder="aarav.sharma@example.com" className={InputBase} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <FieldLabel htmlFor="profile">GitHub or LinkedIn</FieldLabel>
                    <input id="profile" name="profile" placeholder="github.com/aaravsharma or linkedin.com/in/priya-singh" className={InputBase} />
                  </div>
                  <div>
                    <FieldLabel htmlFor="phone">Contact Number</FieldLabel>
                    <input id="phone" name="phone" type="tel" inputMode="tel" required placeholder="+91 98765 43210" className={InputBase} />
                    <ValidationError prefix="Contact Number" field="phone" errors={state.errors} />
                  </div>
                </div>
                {mode !== 'tour' && (
                  <div>
                    <FieldLabel htmlFor="project">What are you building?</FieldLabel>
                    <textarea id="project" name="project" rows={4} required placeholder="Tell us about your project, traction, and why HackHouse fits." className={InputBase} />
                    <ValidationError prefix="Project" field="project" errors={state.errors} />
                  </div>
                )}

                {/* Mode-specific fields */}
                {mode === 'coworking' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <FieldLabel htmlFor="plan">Plan Preference</FieldLabel>
                      <select id="plan" name="plan" className={InputBase} defaultValue="day-pass">
                        <option value="day-pass">Day Pass</option>
                        <option value="night-owl">Night Owl</option>
                      </select>
                    </div>
                    <div>
                      <FieldLabel htmlFor="start">Preferred Start Date</FieldLabel>
                      <input id="start" name="start" type="date" className={InputBase} />
                    </div>
                    <div>
                      <FieldLabel htmlFor="city">City / Location</FieldLabel>
                      <input id="city" name="city" placeholder="Gurgaon" className={InputBase} />
                    </div>
                  </div>
                )}

                {mode === 'tour' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <FieldLabel htmlFor="tour-date">Tour Date</FieldLabel>
                      <input id="tour-date" name="tour_date" type="date" className={InputBase} />
                    </div>
                    <div>
                      <FieldLabel htmlFor="tour-time">Preferred Time</FieldLabel>
                      <input id="tour-time" name="tour_time" type="time" className={InputBase} />
                    </div>
                    <div>
                      <FieldLabel htmlFor="tour-notes">Notes</FieldLabel>
                      <input id="tour-notes" name="tour_notes" placeholder="Any specific questions?" className={InputBase} />
                    </div>
                  </div>
                )}

                <div>
                  <FieldLabel htmlFor="ref">How did you hear about us?</FieldLabel>
                  <input id="ref" name="ref" placeholder="Twitter, friend, demo day, etc." className={InputBase} />
                </div>

                <input type="hidden" name="form_name" value="HackHouse Application" />
                <input type="hidden" name="interest" value={mode === 'coworking' ? 'Coworking Desk' : mode === 'tour' ? 'Tour Booking' : 'Residency / Co-living'} />

                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 rounded-lg border border-white/15 text-[#EAEAEA]/80 hover:text-white hover:border-white/30 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="relative group px-8 py-3 rounded-lg font-semibold text-black overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--acc-cyan)] to-[var(--acc-purple)] group-hover:opacity-90 transition" />
                    <span className="relative flex items-center gap-2">
                      {state.submitting ? (
                        <>
                          <span className="inline-block h-4 w-4 rounded-full border-2 border-black/40 border-t-black animate-spin" />
                          {mode === 'coworking' ? 'Submitting' : mode === 'tour' ? 'Booking' : 'Submitting'}
                        </>
                      ) : (
                        <>{mode === 'coworking' ? 'Submit' : mode === 'tour' ? 'Book Tour' : 'Submit'}</>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Subtle corner glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[var(--acc-purple)]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[var(--acc-cyan)]/30 blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormModal;
