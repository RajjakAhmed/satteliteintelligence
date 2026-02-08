import { motion } from "framer-motion";

export default function UploadBox({
  file,
  setFile,
}: {
  file: File | null;
  setFile: (file: File | null) => void;
}) {
  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  }

  return (
    <motion.label
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="block border-2 border-dashed border-green-500/40 rounded-3xl p-12 text-center 
      cursor-pointer bg-white/5 hover:border-green-400 transition shadow-lg shadow-green-500/10"
    >
      <p className="text-xl font-bold text-green-300">
        Drag & Drop Satellite Image
      </p>

      <p className="text-gray-400 mt-2 text-sm">
        or click to browse from your device
      </p>

      {file && (
        <p className="mt-4 text-green-400 font-semibold">
          Selected: {file.name}
        </p>
      )}

      <input type="file" hidden accept="image/*" onChange={handleFile} />
    </motion.label>
  );
}
