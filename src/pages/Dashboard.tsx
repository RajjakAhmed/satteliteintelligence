import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { api } from "../services/api";

/* 🌍 Satellite Data Stream Grid Background */
function SatelliteGridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,150,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,150,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Moving Data Stream Beam */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,255,150,0.15),transparent)]"
        animate={{ y: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
      />

      {/* Star Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:140px_140px] opacity-20" />
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  /* ✅ Protect Dashboard + Load History */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    async function fetchHistory() {
      try {
        const res = await api.get("/api/history");
        setHistory(res.data);
      } catch (err) {
        console.log("History fetch failed", err);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, []);

  /* ✅ Stats */
  const totalPredictions = history.length;
  const latestLabel =
    totalPredictions > 0 ? history[0]?.label : "None";

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />

      {/* 🌍 Satellite Grid Background */}
      <SatelliteGridBackground />

      <div className="relative max-w-6xl mx-auto px-6 py-10">
        {/* 🚀 Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-10 rounded-3xl border border-white/10 
          bg-gradient-to-r from-green-600/20 via-black to-black shadow-2xl"
        >
          <h1 className="text-5xl font-extrabold tracking-tight">
            SpaceAI Mission Dashboard
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Monitor your satellite terrain scans, view recent neural predictions,
            and launch new AI classification missions instantly.
          </p>

          {/* ✅ FIXED Neural Data Pulse */}
          <div className="mt-6 relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full w-12 rounded-full bg-green-400 blur-md"
              animate={{ x: ["-30%", "110%"] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>

        {/* ✅ Simple Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          {/* Total Predictions */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-xl">
            <p className="text-gray-400 text-sm">
              Total AI Terrain Scans
            </p>
            <h2 className="text-4xl font-bold mt-2 text-green-400">
              {totalPredictions}
            </h2>
          </div>

          {/* Latest Prediction */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-xl">
            <p className="text-gray-400 text-sm">
              Latest Detected Terrain
            </p>
            <h2 className="text-3xl font-bold mt-2 text-white">
              {latestLabel}
            </h2>
          </div>
        </motion.div>

        {/* 🛰 Recent Neural Predictions */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Recent Neural Predictions
          </h2>

          <AnimatePresence>
            {loading ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 animate-pulse"
              >
                Loading mission history...
              </motion.p>
            ) : history.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500"
              >
                No predictions yet. Upload your first satellite scan.
              </motion.p>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {history.slice(0, 3).map((item, index) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    className="relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden shadow-xl"
                  >
                    {/* Background Space Image */}
                    <img
                      src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
                      alt="AI Scan"
                      className="absolute inset-0 w-full h-full object-cover opacity-10"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />

                    {/* Content */}
                    <div className="relative z-10">
                      <p className="text-gray-400 text-sm">
                        Scan #{index + 1}
                      </p>

                      <h3 className="text-2xl font-bold text-green-400 mt-3">
                        {item.label}
                      </h3>

                      <p className="text-gray-500 text-sm mt-2">
                        Neural classification completed successfully.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 🚀 Launch New Scan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 p-10 rounded-3xl bg-gradient-to-r 
          from-green-600/20 via-black to-black border border-white/10 shadow-2xl"
        >
          <h2 className="text-3xl font-bold">
            Launch a New Satellite Scan
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl">
            Upload a new satellite patch and SpaceAI will classify forests,
            cities, rivers, agriculture, and more instantly.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/upload")}
            className="mt-8 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 
            font-semibold shadow-lg shadow-green-500/30"
          >
            Upload & Predict →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
