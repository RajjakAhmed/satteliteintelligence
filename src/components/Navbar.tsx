import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <nav className="w-full flex justify-between items-center px-8 py-5 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      {/* Logo */}
      <Link
        to="/dashboard"
        className="text-xl font-bold tracking-wide text-green-400"
      >
        SpaceAI
      </Link>

      {/* Links */}
      <div className="flex gap-6 text-gray-300 text-sm font-medium">
        <Link to="/upload" className="hover:text-white transition">
          Upload
        </Link>

        <Link to="/history" className="hover:text-white transition">
          History
        </Link>

        <button
          onClick={logout}
          className="text-red-400 hover:text-red-500 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
