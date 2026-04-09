"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuth = pathname === "/login" || pathname === "/signup";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-sm shadow-blue-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" id="navbar-logo">
          <div className="relative w-8 h-8 rounded-xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
            <Zap className="w-4 h-4 text-white relative z-10 fill-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-800">
            Black<span className="gradient-text">clap</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        {!isAuth && (
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-slate-500 hover:text-slate-800 transition-colors duration-200 font-medium"
            >
              Features
            </Link>
            <Link
              href="#why-join"
              className="text-sm text-slate-500 hover:text-slate-800 transition-colors duration-200 font-medium"
            >
              Why Blackclap
            </Link>
          </nav>
        )}

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {!isAuth ? (
            <>
              <Link href="/login" id="navbar-login-link">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer font-medium"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" id="navbar-signup-link">
                <Button
                  size="sm"
                  className="btn-primary text-white border-0 cursor-pointer px-5 shadow-md shadow-blue-200"
                >
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <Link href="/" id="navbar-home-link">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              >
                ← Back to Home
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        {!isAuth && (
          <button
            id="navbar-mobile-menu-btn"
            className="md:hidden text-slate-500 hover:text-slate-800"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 pb-6 shadow-lg"
          >
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="#features"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-slate-500 hover:text-slate-800 transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                href="#why-join"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-slate-500 hover:text-slate-800 transition-colors font-medium"
              >
                Why Blackclap
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                <Link href="/login" id="mobile-login-link">
                  <Button
                    variant="ghost"
                    className="w-full text-slate-600 hover:bg-slate-100 justify-start font-medium"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup" id="mobile-signup-link">
                  <Button className="w-full btn-primary text-white border-0">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
