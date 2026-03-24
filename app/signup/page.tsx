"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) alert(error.message);
    else {
      alert("Account created 😏");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
      >
        <h2 className="text-xl font-semibold mb-4">Create Account</h2>

        <form onSubmit={handleSignup} className="space-y-5">

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

            <div className="absolute left-10 top-1/2 -translate-y-1/2 flex pointer-events-none text-sm">
              {email.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
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
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

            <div className="absolute left-10 top-1/2 -translate-y-1/2 flex pointer-events-none text-sm">
              {password.split("").map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
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
            {loading ? "Creating..." : "Create Account"}
          </motion.button>

        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-indigo-400 cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </motion.div>
    </div>
  );
}