"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Flame, BookOpen, BarChart3, LogOut } from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 🔐 Protect route
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login");
      } else {
        setUser(data.user);
      }
    };
    checkUser();
  }, [router]);

  // Cursor glow
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex relative overflow-hidden">

      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.12), transparent 80%)`,
        }}
      />

      {/* SIDEBAR */}
      <div className="w-64 hidden md:flex flex-col border-r border-white/10 p-6 z-10">

        <h1 className="text-xl font-semibold mb-8">
          Nexus
        </h1>

        <div className="space-y-4 text-sm">

          <div className="flex items-center gap-2 text-indigo-400">
            <BarChart3 size={18} />
            Dashboard
          </div>

          <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
            <BookOpen size={18} />
            Courses
          </div>

        </div>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-400 hover:text-red-300"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-8 z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold">
            Welcome back 😏
          </h2>
          <p className="text-gray-400 text-sm">
            {user?.email}
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* POTATO STREAK 🔥 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-xl p-[1px]"
          >
            <div className="absolute inset-0 rounded-xl bg-indigo-500/30 opacity-0 group-hover:opacity-100 blur-md transition"></div>

            <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="text-orange-400" />
                <h3 className="text-lg font-medium">Potato Streak</h3>
              </div>

              <motion.p
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-4xl font-bold text-indigo-400"
              >
                7 🔥
              </motion.p>

              <p className="text-gray-400 text-sm mt-2">
                Keep logging daily
              </p>
            </div>
          </motion.div>

          {/* COURSES */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-indigo-400" />
              <h3 className="text-lg font-medium">Courses</h3>
            </div>

            <p className="text-3xl font-bold">12</p>
            <p className="text-gray-400 text-sm mt-2">
              Available courses
            </p>
          </motion.div>

          {/* PERFORMANCE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="text-indigo-400" />
              <h3 className="text-lg font-medium">Performance</h3>
            </div>

            <p className="text-3xl font-bold">82%</p>
            <p className="text-gray-400 text-sm mt-2">
              Avg score
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}