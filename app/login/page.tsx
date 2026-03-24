"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#0B0F19] text-white">
      
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 relative items-center justify-center bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-10"
        >
          <h1 className="text-4xl font-bold tracking-tight">
            NEXUS
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Where Data Minds Connect
          </p>

          <div className="mt-10 text-sm text-gray-500">
            Stay consistent. Maintain your streak.
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-[#111827] p-8 rounded-2xl shadow-xl border border-white/10"
        >
          
          <h2 className="text-2xl font-semibold mb-6">
            Sign in to Nexus
          </h2>

          <form className="space-y-5">

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#0B0F19] border border-white/10 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#0B0F19] border border-white/10 rounded-lg py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              onClick={() => setLoading(true)}
              className="w-full bg-indigo-600 hover:bg-indigo-500 transition py-3 rounded-lg font-medium flex items-center justify-center"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

          </form>

          <p className="text-gray-500 text-sm mt-6 text-center">
            New here? Create an account
          </p>
        </motion.div>
      </div>
    </div>
  );
}