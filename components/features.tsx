"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Heart, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Connect with friends",
    description: "Build your network and stay connected with people who matter most to you.",
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-50",
    border: "hover:border-blue-200",
    shadow: "hover:shadow-blue-100",
  },
  {
    icon: MessageSquare,
    title: "Share your thoughts",
    description: "Post updates, photos, and engage in meaningful conversations that spark ideas.",
    gradient: "from-purple-500 to-violet-400",
    iconBg: "bg-purple-50",
    border: "hover:border-purple-200",
    shadow: "hover:shadow-purple-100",
  },
  {
    icon: Heart,
    title: "Express yourself",
    description: "Like, comment, and interact with content that resonates with who you are.",
    gradient: "from-pink-500 to-rose-400",
    iconBg: "bg-pink-50",
    border: "hover:border-pink-200",
    shadow: "hover:shadow-pink-100",
  },
  {
    icon: Bell,
    title: "Stay updated",
    description: "Get real-time updates from your network in a personalized feed tailored for you.",
    gradient: "from-orange-500 to-amber-400",
    iconBg: "bg-orange-50",
    border: "hover:border-orange-200",
    shadow: "hover:shadow-orange-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Features() {
  return (
    <section id="why-join" className="py-28 px-6 relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-purple-50/30">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-purple-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-sm font-medium mb-6 shadow-sm">
            <span>✦</span>
            <span>Everything you need</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 text-slate-900">
            Why join{" "}
            <span className="gradient-text">Blackclap?</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            A platform built with intention — designed to help you connect, share,
            and grow in a community that truly gets you.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          id="features"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div key={i} variants={cardVariants}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card
                    className={`
                      h-full bg-white border border-slate-200/70
                      ${feature.border} transition-all duration-300
                      hover:shadow-xl ${feature.shadow}
                      rounded-2xl overflow-hidden cursor-default
                    `}
                  >
                    <CardContent className="p-6 flex flex-col gap-5">
                      {/* Icon */}
                      <div className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center`}>
                        <div className={`w-8 h-8 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center shadow-sm`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-slate-800 font-semibold text-base leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Bottom accent */}
                      <div className={`h-0.5 w-10 bg-gradient-to-r ${feature.gradient} rounded-full opacity-70 mt-auto`} />
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5"
        >
          {[
            { value: "50K+", label: "Active Users" },
            { value: "2M+",  label: "Posts Shared" },
            { value: "99.9%",label: "Uptime" },
            { value: "180+", label: "Countries" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
