import { motion } from "framer-motion";

export default function ConfidenceGauge({ value }: { value: number }) {
  const percent = Math.round(value * 100);
  const radius = 55;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="140">
        {/* Background */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="12"
          fill="none"
        />

        {/* Animated Progress */}
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          stroke="lime"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset:
              circumference * (1 - percent / 100),
          }}
          transition={{ duration: 1.4 }}
        />

        {/* Text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="8px"
          fill="white"
          fontSize="22"
          fontWeight="bold"
        >
          {percent}%
        </text>
      </svg>

      <p className="text-gray-400 text-sm mt-2">
        Confidence Score
      </p>
    </div>
  );
}
