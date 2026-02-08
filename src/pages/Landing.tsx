import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white overflow-hidden relative">
      
      {/* Neural Glow + Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow Orbs */}
        <div className="w-[520px] h-[520px] bg-green-500/20 blur-[180px] rounded-full absolute top-10 left-10 animate-pulse"></div>
        <div className="w-[420px] h-[420px] bg-sky-500/20 blur-[180px] rounded-full absolute bottom-10 right-10 animate-pulse"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,150,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,150,0.05)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-20"
        >
          <h1 className="text-xl font-bold tracking-wide">
            SpaceAI Intelligence
          </h1>

          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold shadow-lg shadow-green-500/20"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition font-semibold border border-white/10"
            >
              Register
            </Link>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Satellite{" "}
              <span className="text-green-400">Intelligence</span>
              <br />
              Classification System
            </h2>

            <p className="mt-6 text-gray-300 text-lg max-w-lg leading-relaxed">
              Upload satellite imagery and let AI classify land regions —
              forests, cities, water bodies, farmland, and more with neural
              confidence scoring.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/dashboard"
                className="px-7 py-3 rounded-2xl bg-green-500 hover:bg-green-600 transition font-bold text-lg shadow-xl shadow-green-500/30"
              >
                Start Prediction →
              </Link>

              <Link
                to="/map"
                className="px-7 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition font-bold text-lg border border-white/10"
              >
                Explore Map
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Floating Satellite Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80"
              alt="Satellite Earth"
              className="rounded-3xl shadow-2xl border border-white/10 w-full max-w-md"
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 left-6 bg-black/60 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-lg"
            >
              <p className="text-sm text-gray-300">
                Powered by ResNet18 + EuroSAT Dataset
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-28 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white/5 p-7 rounded-3xl border border-white/10 hover:bg-white/10 transition hover:-translate-y-2 duration-300">
            <h3 className="font-bold text-lg">Land Classification</h3>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Detect terrain types instantly from satellite imagery patches
              using AI.
            </p>
          </div>

          <div className="bg-white/5 p-7 rounded-3xl border border-white/10 hover:bg-white/10 transition hover:-translate-y-2 duration-300">
            <h3 className="font-bold text-lg">Neural Confidence</h3>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              AI provides confidence scoring with intelligent explanations.
            </p>
          </div>

          <div className="bg-white/5 p-7 rounded-3xl border border-white/10 hover:bg-white/10 transition hover:-translate-y-2 duration-300">
            <h3 className="font-bold text-lg">Mission Dashboard</h3>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Track prediction history and launch new satellite scans anytime.
            </p>
          </div>
        </motion.div>

        {/* 👤 Creator Footer Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-block px-8 py-5 rounded-3xl bg-white/5 border border-white/10 shadow-xl">
            <p className="text-gray-400 text-sm">
              SpaceAI Satellite Intelligence System
            </p>

            <p className="mt-2 text-white font-semibold">
              Made by{" "}
              <span className="text-green-400 font-bold">
                Rajjak Ahmed
              </span>
            </p>

            <a
              href="https://www.linkedin.com/in/rajjak-ahmed-abb1a1219"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-sky-400 hover:underline font-semibold"
            >
              www.linkedin.com/in/rajjak-ahmed-abb1a1219 →
            </a>
          </div>

          <p className="mt-6 text-gray-600 text-xs">
            © {new Date().getFullYear()} SpaceAI • Neural Geospatial Intelligence Platform
          </p>
        </motion.div>
      </div>
    </div>
  );
}
