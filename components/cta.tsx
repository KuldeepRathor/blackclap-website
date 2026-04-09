"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-28 px-6 relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-white to-blue-50/40">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-purple-100/35 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-30 blur-sm" />
          <div className="absolute inset-[1px] bg-white rounded-3xl" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center shadow-xl shadow-blue-100/60 rounded-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium mb-8 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join the community</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900"
            >
              Ready to get{" "}
              <span className="gradient-text">started?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-slate-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Join thousands of users already connecting and sharing on Blackclap.
              Your community is waiting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/signup" id="cta-create-account-btn">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    className="btn-primary text-white border-0 px-8 h-12 text-base font-semibold rounded-xl cursor-pointer group shadow-lg shadow-blue-200"
                  >
                    Create Your Account
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>

              <Link href="/login" id="cta-login-btn">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-slate-500 hover:text-slate-800 hover:bg-slate-50 border border-slate-200 px-8 h-12 text-base rounded-xl cursor-pointer bg-white shadow-sm"
                >
                  Already have an account?
                </Button>
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm"
            >
              {["Free to join", "No credit card required", "Cancel anytime"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
