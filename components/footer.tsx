"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, MessageCircle, Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-2" id="footer-logo">
              <Image
                src="/images/blackclap_logo.png"
                alt="Blackclap Logo"
                width={28}
                height={28}
                className="rounded-lg object-contain"
              />
              <span className="text-base font-bold tracking-tight text-slate-800">
                Black<span className="gradient-text">clap</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm text-center md:text-left max-w-xs">
              Connecting people through shared experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { label: "Login",         href: "/login",  id: "footer-login-link" },
              { label: "Sign Up",       href: "/signup", id: "footer-signup-link" },
              { label: "Privacy Policy",href: "#",       id: "footer-privacy-link" },
              { label: "Terms of Service", href: "#",    id: "footer-terms-link" },
            ].map((link) => (
              <Link
                key={link.id}
                href={link.href}
                id={link.id}
                className="text-sm text-slate-400 hover:text-slate-700 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: MessageCircle, href: "#", id: "footer-social-chat" },
              { icon: Globe,         href: "#", id: "footer-social-globe" },
              { icon: Link2,         href: "#", id: "footer-social-link" },
            ].map(({ icon: Icon, href, id }) => (
              <motion.a
                key={id}
                href={href}
                id={id}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-400 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs">
          <span>© {new Date().getFullYear()} Blackclap. All rights reserved.</span>
          <span>Made with ❤️ for the community</span>
        </div>
      </div>
    </footer>
  );
}
