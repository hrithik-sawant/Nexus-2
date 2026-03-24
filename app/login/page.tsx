"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Lock, BarChart3, BookOpen, Flame, LineChart } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Cursor tracking
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex bg-[#0B0F19] text-white relative overflow-hidden">

      {/* 🔥 Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.15), transparent 80%)`,
        }}
      />

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 flex-col justify-center px-16 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold">
              N
            </div>
            <span className="text-lg font-medium text-gray-300">
              Nexus
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            NEXUS <br />
            <span className="text-indigo-400">by Hrithik</span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Where Data Minds Connect
          </p>

          {/* 🔥 Feature Tiles */}
          <div className="mt-10 space-y-4">

            {[
              { icon: BookOpen, text: "Access structured courses & PDFs" },
              { icon: BarChart3, text: "Take timed MCQ exams with instant results" },
              { icon: Flame, text: "Build your Potato streak daily" },
              { icon: LineChart, text: "Track your performance over time" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md hover:bg-white/10 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-indigo-400"
                >
                  <item.icon size={20} />
                </motion.div>

                <span className="text-gray-300 text-sm">{item.text}</span>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <div className="flex flex-col items-center mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold mb-2">
              N
            </div>
            <h2 className="text-xl font-semibold">NEXUS by Hrithik</h2>
          </div>

          <h3 className="text-lg font-medium mb-1">Sign In</h3>
          <p className="text-gray-400 text-sm mb-6">
            Welcome back, Potato 🥔
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg font-medium transition flex items-center justify-center"
            >
              {loading ? "Signing in..." : "Sign In →"}
            </motion.button>

          </form>

          <p className="text-gray-500 text-sm mt-6 text-center">
            New here? Create account
          </p>
        </motion.div>
      </div>
    </div>
  );
}