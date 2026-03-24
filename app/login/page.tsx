"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Lock, BookOpen, BarChart3, Flame, LineChart } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.15), transparent 80%)`,
        }}
      />

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 flex-col justify-center px-16 relative z-10">

        <h1 className="text-5xl font-bold">
          NEXUS <span className="text-indigo-400">by Hrithik</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Where Data Minds Connect
        </p>

        {/* 🔥 PREMIUM TILES */}
        <div className="mt-10 space-y-4">

          {[
            { icon: BookOpen, text: "Access structured courses & PDFs" },
            { icon: BarChart3, text: "Take timed MCQ exams with instant results" },
            { icon: Flame, text: "Build your Potato streak daily" },
            { icon: LineChart, text: "Track your performance over time" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="relative group cursor-pointer rounded-xl p-[1px]"
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 opacity-0 group-hover:opacity-100 blur-md transition duration-300"></div>

              {/* Card */}
              <div className="relative flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md group-hover:bg-white/10 transition duration-300">

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-indigo-400"
                >
                  <item.icon size={20} />
                </motion.div>

                <span className="text-gray-300 text-sm">
                  {item.text}
                </span>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-lg font-medium mb-1">Sign In</h3>
          <p className="text-gray-400 text-sm mb-6">
            Welcome back, Potato 🥔
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />

              <div className="absolute left-10 top-3 flex gap-[1px] pointer-events-none">
                {email.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 text-transparent caret-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />

              <div className="absolute left-10 top-3 flex gap-[1px] pointer-events-none">
                {password.split("").map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    •
                  </motion.span>
                ))}
              </div>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 text-transparent caret-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 py-3 rounded-lg font-medium"
            >
              {loading ? "Signing in..." : "Sign In →"}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </div>
  );
}