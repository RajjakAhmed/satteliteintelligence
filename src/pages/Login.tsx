import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { api } from "../services/api";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Login Handler (Logic Same)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("username", email);
      formData.append("password", password);

      const res = await api.post("/api/auth/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem("token", res.data.access_token);

      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white grid md:grid-cols-2 relative overflow-hidden">
      
      {/* 🌌 Neural Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[520px] h-[520px] bg-green-500/20 blur-[180px] rounded-full top-[-200px] left-[-200px] animate-pulse" />
        <div className="absolute w-[420px] h-[420px] bg-sky-500/15 blur-[180px] rounded-full bottom-[-180px] right-[-180px] animate-pulse" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,150,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,150,0.05)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />
      </div>

      {/* ✅ LEFT PANEL */}
      <div className="hidden md:flex flex-col justify-center px-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-extrabold tracking-tight"
        >
          SpaceAI Access Portal
        </motion.h1>

        <p className="mt-6 text-lg text-gray-400 max-w-lg leading-relaxed">
          Secure login to your AI-powered geospatial mission dashboard.
          Analyze forests, rivers, cities, agriculture — directly from space.
        </p>

        {/* Floating Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
          alt="Earth Satellite"
          className="mt-12 w-[520px] rounded-3xl shadow-2xl border border-white/10"
        />
      </div>

      {/* ✅ RIGHT PANEL */}
      <div className="flex justify-center items-center px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl backdrop-blur-xl"
        >
          {/* Mobile Image */}
          <div className="md:hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
              alt="Mobile Satellite"
              className="rounded-2xl border border-white/10"
            />
          </div>

          <h2 className="text-3xl font-bold tracking-tight">
            Login to SpaceAI
          </h2>
          <p className="text-gray-400 mt-2">
            Enter your credentials to begin mission analysis.
          </p>

          {/* ✅ FORM */}
          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            
            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 
              focus:border-green-500 focus:ring-2 focus:ring-green-500/30 outline-none transition"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 
              focus:border-green-500 focus:ring-2 focus:ring-green-500/30 outline-none transition"
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold shadow-lg shadow-green-500/30"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Logging in...
                </span>
              ) : (
                "Login →"
              )}
            </motion.button>
          </form>

          {/* Register Link */}
          <p className="mt-6 text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-400 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

          {/* Footer Branding */}
          <p className="mt-10 text-xs text-gray-600 text-center">
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/rajjak-ahmed-abb1a1219"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 font-semibold hover:underline"
            >
              Rajjak Ahmed
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
