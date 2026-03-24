"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import {
  Flame,
  BookOpen,
  BarChart3,
  LogOut,
  Shield,
  Sparkles,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const ADMIN_EMAIL = "hrithiksawant.ps@gmail.com";

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
      } else {
        setUser(data.user);

        if (data.user.email === ADMIN_EMAIL) {
          setIsAdmin(true);
        }
      }
    };

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex relative overflow-hidden">

      {/* Cursor Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(99,102,241,0.12),transparent_40%)]" />

      {/* SIDEBAR */}
      <div className="w-64 hidden md:flex flex-col border-r border-white/10 p-6 z-10">

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold mb-8 tracking-wide"
        >
          Nexus
        </motion.h1>

        <div className="space-y-4 text-sm">

          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-indigo-400"
          >
            <BarChart3 size={18} />
            Dashboard
          </motion.div>

          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition"
          >
            <BookOpen size={18} />
            Courses
          </motion.div>

          {isAdmin && (
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 text-yellow-400"
            >
              <Shield size={18} />
              Admin Panel
            </motion.div>
          )}
        </div>

        <div className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition"
          >
            <LogOut size={18} />
            Logout
          </motion.button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-8 z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="text-indigo-400" size={20} />
            <h2 className="text-2xl font-semibold tracking-tight">
              {isAdmin ? "Admin Dashboard" : "Welcome Back"}
            </h2>
          </div>

          <p className="text-gray-400 text-sm mt-1">
            {user?.email}
          </p>
        </motion.div>

        {/* ADMIN BADGE */}
        {isAdmin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 px-4 py-3 rounded-lg border border-yellow-500/30 bg-yellow-500/10 flex items-center gap-2"
          >
            <Shield size={16} className="text-yellow-400" />
            <span className="text-sm text-yellow-300">
              Admin access enabled
            </span>
          </motion.div>
        )}

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* STREAK */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group rounded-xl p-[1px]"
          >
            <div className="absolute inset-0 rounded-xl bg-indigo-500/20 opacity-0 group-hover:opacity-100 blur-md transition"></div>

            <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="text-orange-400" />
                <h3 className="text-sm text-gray-300">Streak</h3>
              </div>

              <motion.p
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-4xl font-bold text-indigo-400"
              >
                7
              </motion.p>
            </div>
          </motion.div>

          {/* COURSES */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-indigo-400" />
              <h3 className="text-sm text-gray-300">Courses</h3>
            </div>

            <p className="text-3xl font-bold">12</p>
          </motion.div>

          {/* PERFORMANCE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="text-indigo-400" />
              <h3 className="text-sm text-gray-300">Performance</h3>
            </div>

            <p className="text-3xl font-bold">82%</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}