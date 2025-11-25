'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const navItems = [
  { label: 'Credit Cards', href: '/credit-cards' },
  { label: 'Personal Loans', href: '/personal-loans' },
  { label: 'Banking', href: '/banking' },
  { label: 'Mortgages', href: '/mortgages' },
  { label: 'Retirement', href: '/retirement' },
  { label: 'Debt', href: '/debt' },
  { label: 'Reviews', href: '/guides' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/*
        DESKTOP LAYOUT (lg+): Two rows
        - Row 1: Logo centered, large
        - Row 2: Navigation links

        MOBILE LAYOUT (<lg): Single row
        - Hamburger left, Logo center
      */}

      {/* ============================================= */}
      {/* ROW 1: LOGO ROW                              */}
      {/* Desktop: Logo centered, py-4 for breathing room */}
      {/* Mobile: Hamburger + Logo                     */}
      {/* ============================================= */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-auto lg:py-5">

            {/* Mobile Only: Hamburger Button (left side) */}
            <button
              type="button"
              className="lg:hidden p-2 -ml-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Logo */}
            {/* Mobile: smaller, centered via flex-1 */}
            {/* Desktop: large, centered */}
            <div className="flex-1 flex justify-center lg:flex-none lg:w-full lg:justify-center">
              {/* Mobile logo (smaller) */}
              <div className="lg:hidden">
                <Logo size="small" />
              </div>
              {/* Desktop logo (larger) */}
              <div className="hidden lg:block">
                <Logo size="large" />
              </div>
            </div>

            {/* Mobile Only: Spacer to balance hamburger */}
            <div className="lg:hidden w-10" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ============================================= */}
      {/* ROW 2: NAVIGATION ROW (Desktop Only)         */}
      {/* This row is HIDDEN on mobile                 */}
      {/* ============================================= */}
      <nav className="hidden lg:block border-b border-gray-100" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center space-x-8 h-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-wide
                    text-gray-700
                    hover:text-blue-500
                    transition-colors
                    duration-200
                    py-3
                    border-b-2
                    border-transparent
                    hover:border-blue-500
                  "
                  style={{
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ============================================= */}
      {/* MOBILE MENU (Slides down when hamburger clicked) */}
      {/* ============================================= */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-b border-gray-200 shadow-lg"
        >
          <nav className="max-w-7xl mx-auto px-4 py-4" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      block
                      px-4
                      py-3
                      text-base
                      font-semibold
                      text-gray-700
                      hover:text-blue-500
                      hover:bg-gray-50
                      rounded-lg
                      transition-colors
                    "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
