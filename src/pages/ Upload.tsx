import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import PredictionCard from "../components/PredictionCard";
import { api } from "../services/api";
import { motion, AnimatePresence } from "framer-motion";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);

  const [result, setResult] = useState<{
    label: string;
    confidence: number;
  } | null>(null);

  const [loading, setLoading] = useState(false);

  // Result scroll reference
  const resultRef = useRef<HTMLDivElement | null>(null);

  async function runPrediction() {
    if (!file) {
      alert("Please select an image first.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Session expired. Please login again.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await api.post("/api/predict", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Prediction finished → set result
      setResult({
        label: res.data.label,
        confidence: res.data.confidence,
      });

      // Auto-scroll ONLY after loader completes
setTimeout(() => {
  if (resultRef.current) {
    const y =
      resultRef.current.getBoundingClientRect().top +
      window.scrollY -
      120; // offset for navbar

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
}, 400);

    } catch (err) {
      console.error("Prediction failed:", err);
      alert("Prediction failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />

      {/* Neural Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-green-500/20 blur-3xl rounded-full top-[-200px] left-[-200px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-sky-500/10 blur-3xl rounded-full bottom-[-180px] right-[-180px] animate-pulse" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight">
            Upload & Predict Terrain
          </h1>

          <p className="text-gray-400 mt-3 max-w-xl">
            Drop a satellite image and SpaceAI will classify terrain using deep
            neural intelligence.
          </p>
        </motion.div>

        {/* Upload Box */}
        <div className="mt-10">
          <UploadBox file={file} setFile={setFile} />
        </div>

        {/* Preview */}
        <AnimatePresence>
          {file && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6"
            >
              <p className="text-gray-400 text-sm mb-2">
                Selected Image Preview:
              </p>

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="w-full max-h-[350px] object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Predict Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={runPrediction}
          disabled={!file || loading}
          className={`mt-8 w-full py-4 rounded-xl font-semibold transition relative overflow-hidden
          ${
            file && !loading
              ? "bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30"
              : "bg-gray-700 cursor-not-allowed"
          }`}
        >
          {loading ? "Neural Network Processing..." : "Predict Terrain"}

          {/* Glow Pulse */}
          {loading && (
            <motion.div
              className="absolute inset-0 bg-white/10"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            />
          )}
        </motion.button>

        {/* Loader */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full border-4 border-green-400 border-t-transparent animate-spin" />

              <p className="mt-4 text-green-300 font-semibold text-lg">
                AI is extracting terrain features...
              </p>

              <p className="text-gray-500 text-sm">
                Running deep convolutional neural network inference
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result (Scroll Target) */}
        <AnimatePresence>
          {result && (
            <motion.div
              ref={resultRef}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold mb-4">
                Prediction Result
              </h2>

              <PredictionCard
                label={result.label}
                confidence={result.confidence}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
