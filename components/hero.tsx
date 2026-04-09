"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-white via-blue-50/40 to-purple-50/30">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-purple-200/35 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full bg-indigo-100/30 blur-3xl animate-blob animation-delay-4000" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>The next generation social platform</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 text-slate-900"
        >
          Connect with{" "}
          <span className="gradient-text">people</span>
          <br className="hidden sm:block" />
          {" "}on Blackclap
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Share your moments, discover new perspectives, and build meaningful connections
          in a vibrant community that never sleeps.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/signup" id="hero-get-started-btn">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="btn-primary text-white border-0 px-8 h-12 text-base font-semibold rounded-xl cursor-pointer group shadow-lg shadow-blue-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>

          <Link href="/login" id="hero-login-btn">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="ghost"
                className="text-slate-600 hover:text-slate-900 hover:bg-white border border-slate-200 px-8 h-12 text-base rounded-xl cursor-pointer group shadow-sm bg-white/70"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform fill-current" />
                Login
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-400 text-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-cyan-500"].map((bg, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>50,000+ users joined</span>
          </div>

          <div className="hidden sm:block h-4 w-px bg-slate-200" />

          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9/5 rating</span>
          </div>
        </motion.div>

        {/* Floating UI Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.9, ease: EASE }}
          className="mt-20 relative"
        >
          <div className="relative max-w-3xl mx-auto">
            {/* Soft glow behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 rounded-3xl blur-3xl scale-105" />

            {/* Mock UI Card */}
            <div className="relative glass-card rounded-2xl p-1 overflow-hidden shadow-2xl shadow-blue-100">
              <div className="bg-white rounded-xl p-6">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  <div className="flex-1 mx-4 h-5 bg-slate-100 rounded-md flex items-center px-3">
                    <span className="text-slate-400 text-xs">blackclap.app/feed</span>
                  </div>
                </div>

                {/* Mock Feed */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { user: "Alex", color: "from-blue-500 to-cyan-400", time: "2m ago", likes: 142 },
                    { user: "Sarah", color: "from-purple-500 to-pink-400", time: "5m ago", likes: 89 },
                    { user: "Mike", color: "from-orange-500 to-red-400", time: "12m ago", likes: 237 },
                  ].map((post, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.15 }}
                      className="rounded-xl overflow-hidden bg-slate-50 border border-slate-100"
                    >
                      <div className={`h-24 bg-gradient-to-br ${post.color} opacity-80`} />
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${post.color}`} />
                          <span className="text-slate-600 text-xs font-medium">{post.user}</span>
                          <span className="text-slate-400 text-xs ml-auto">{post.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 text-xs">
                          <span>❤️ {post.likes}</span>
                          <span>💬 24</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50/60 to-transparent pointer-events-none" />
    </section>
  );
}
