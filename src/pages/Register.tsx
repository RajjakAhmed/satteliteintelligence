import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { api } from "../services/api";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api.post("/api/auth/register", {
        email,
        password,
      });

      alert("Registered successfully. Please login.");

      navigate("/login");
    } catch (err: any) {
      console.error(err);

      alert(
        err.response?.data?.detail || "Registration failed"
      );
    }
  }

  return (
    <div className="min-h-screen bg-black text-white grid md:grid-cols-2">

      {/* LEFT PANEL */}
      <div className="hidden md:flex flex-col justify-center px-16 bg-gradient-to-br from-green-900/40 via-black to-black">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-extrabold tracking-tight"
        >
          Join SpaceAI
        </motion.h1>

        <p className="mt-6 text-lg text-gray-400 max-w-lg leading-relaxed">
          Create an account to start analyzing satellite imagery with AI-powered
          land classification intelligence.
        </p>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          alt="Satellite Register"
          className="mt-12 w-[520px] rounded-3xl shadow-2xl border border-white/10"
        />
      </div>

      {/* RIGHT PANEL */}
      <div className="flex justify-center items-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl"
        >
          {/* Mobile Image */}
          <div className="md:hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              alt="Mobile Register"
              className="rounded-2xl border border-white/10"
            />
          </div>

          <h2 className="text-3xl font-bold">Register</h2>
          <p className="text-gray-400 mt-2">
            Start your geospatial AI journey.
          </p>

          {/* FORM */}
          <form onSubmit={handleRegister} className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-green-500 outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-green-500 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-400 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
