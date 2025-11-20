'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Logo from "./Logo";
import LogoIcon from "./LogoIcon";

const navLinks = [
  { label: "Make Money", href: "/make-money" },
  { label: "Save Money", href: "/save-money" },
  { label: "Credit Cards", href: "/credit-cards" },
  { label: "Personal Loans", href: "/personal-loans" },
  { label: "Banking", href: "/banking" },
  { label: "Debt", href: "/debt" },
  { label: "Retirement", href: "/retirement" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav Links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md transition">
                    {link.label}
                  </button>
                </Link>
              ))}
            </div>

            {/* Search */}
            <button className="p-2 hover:bg-gray-100 rounded-md transition">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <LogoIcon />

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <button
                      className="w-full text-left px-4 py-2 text-base font-medium hover:bg-gray-100 rounded-md transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </button>
                  </Link>
                ))}
                <div className="border-t pt-2 mt-2">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md transition flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
