"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Next step: Supabase auth 😏");
    }, 1500);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#0B0F19] overflow-hidden text-white">

      {/* 🔥 Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse"></div>
      </div>

      {/* 🔷 Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <h1 className="text-3xl font-semibold mb-2 text-center">
          Welcome to Nexus
        </h1>

        <p className="text-gray-400 text-sm text-center mb-6">
          Where Data Minds Connect
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg font-medium flex items-center justify-center transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </motion.button>

        </form>

        <p className="text-gray-500 text-sm mt-6 text-center">
          Maintain your streak. Stay consistent.
        </p>
      </motion.div>
    </div>
  );
}