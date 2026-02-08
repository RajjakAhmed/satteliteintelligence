import ConfidenceGauge from "./ConfidenceGauge";

export default function PredictionCard({
  label,
  confidence,
}: {
  label: string;
  confidence: number;
}) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row gap-8 items-center shadow-xl">
      
      {/* Label Info */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-green-400">
          {label}
        </h3>

        <p className="text-gray-400 mt-2 leading-relaxed">
          SpaceAI neural model detected this region based on satellite feature extraction.
        </p>
      </div>

      {/* Confidence Gauge */}
      <ConfidenceGauge value={confidence} />
    </div>
  );
}
