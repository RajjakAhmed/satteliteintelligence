import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { api } from "../services/api";

interface Prediction {
  id: number;
  filename: string;
  label: string;
  confidence: number;
  created_at: string;
}

export default function History() {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch Prediction History
  async function fetchHistory() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Session expired. Please login again.");
        return;
      }

      const res = await api.get("/api/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPredictions(res.data);
    } catch (err) {
      console.error("Failed to load history:", err);
      alert("Failed to load prediction history.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold">
          Prediction History
        </h1>

        <p className="text-gray-400 mt-3">
          Your last uploaded satellite predictions are stored here.
        </p>

        {/* Loading */}
        {loading && (
          <p className="mt-6 text-green-400 animate-pulse">
            Loading history...
          </p>
        )}

        {/* No Data */}
        {!loading && predictions.length === 0 && (
          <p className="mt-8 text-gray-500">
            No predictions yet. Upload an image first.
          </p>
        )}

        {/* History Table */}
        {!loading && predictions.length > 0 && (
          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th className="p-4">Filename</th>
                  <th className="p-4">Label</th>
                  <th className="p-4">Confidence</th>
                  <th className="p-4">Time</th>
                </tr>
              </thead>

              <tbody>
                {predictions.map((p) => (
                  <tr
                    key={p.id}
                    className="border-t border-white/10 hover:bg-white/5 transition"
                  >
                    <td className="p-4 text-gray-400">
                      {p.filename}
                    </td>

                    <td className="p-4 font-semibold text-green-400">
                      {p.label}
                    </td>

                    <td className="p-4 text-gray-300">
                      {(p.confidence * 100).toFixed(1)}%
                    </td>

                    <td className="p-4 text-gray-500">
                      {new Date(p.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
