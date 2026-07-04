"use client";

import React from "react";

/**
 * Newsletter Component
 * 
 * Renders the Substack newsletter subscription card for the portfolio.
 * 
 * 1. Component Structure:
 *    The component consists of a wrapper <section> containing a card element.
 *    The outer section uses dynamic spacing (py-16), max width constraints, and scroll margin.
 *    The inner card is a single block styled as a centered container with a custom border and background.
 * 
 * 2. Substack Form Redirects:
 *    The form redirects the user to the external Substack signup page at https://jezrealdev.substack.com/subscribe.
 *    It uses GET method and target="_blank" to ensure the subscription happens in a new tab without interrupting the user's experience.
 * 
 * 3. Form Inputs:
 *    It contains a required text input field for the email address, with name="email" to match the Substack query string format.
 *    A submit button triggers the form submission.
 * 
 * 4. Styling Classes:
 *    Uses custom theme tokens: bg-forge-card for the card background, bg-forge-bg for input background, text-forge-accent for badge text,
 *    and border-forge-fg/15 for subtle borders. Font families are configured using font-sans and font-mono.
 * 
 * 5. Responsive Styling:
 *    The form grid switches layout dynamically from vertical stack on mobile (flex-col) to side-by-side on larger viewports (sm:flex-row).
 *    Heading sizes scale from text-2xl to text-3xl (md:text-3xl) to maintain clear visual hierarchy across all device screens.
 */
export default function Newsletter() {
  return (
    <section id="newsletter" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
      <div className="border border-forge-fg/5 bg-forge-card p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center font-sans">
        <span className="text-sm font-semibold uppercase tracking-widest text-forge-accent">Weekly Reflections</span>
        <h2 className="mt-3 font-sans text-2xl md:text-3xl font-bold tracking-tight text-forge-fg">
          BUILDING IN PUBLIC NEWSLETTER
        </h2>
          <p className="mt-4 text-base font-medium text-forge-fg/80 max-w-lg mx-auto leading-relaxed">
          I write a weekly Sunday newsletter sharing raw engineering logs, lesson plans, and full-stack strategies.
        </p>
        <form
          action="https://jezrealmomoh.substack.com/subscribe"
          method="GET"
          target="_blank"
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email address..."
            required
            className="flex-grow bg-forge-bg border border-forge-fg/20 px-4 py-3 text-sm text-forge-fg placeholder-forge-fg/40 focus:outline-none focus:border-forge-accent"
          />
          <button
            type="submit"
            className="bg-forge-accent text-forge-bg font-bold px-6 py-3 text-sm hover:bg-forge-accent/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}