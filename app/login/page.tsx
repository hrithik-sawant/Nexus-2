"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const text = "NEXUS";

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

        {/* 🔷 Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold"
          >
            N
          </motion.div>

          <span className="text-lg font-medium text-gray-300">
            Nexus
          </span>
        </motion.div>

        {/* 🔥 Bouncing Text */}
        <h1 className="text-5xl font-bold leading-tight flex gap-1">
          {text.split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              className="text-white"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <h2 className="text-3xl text-indigo-400 font-semibold mt-2">
          by Hrithik
        </h2>

        <p className="mt-4 text-gray-400 text-lg">
          Where Data Minds Connect
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <h3 className="text-lg font-medium mb-1">Sign In</h3>
          <p className="text-gray-400 text-sm mb-6">
            Welcome back, Potato 🥔
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

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
        </motion.div>
      </div>
    </div>
  );
}