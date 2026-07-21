export default function TornEdge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="block w-full"
        viewBox="0 0 1200 28"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "28px" }}
      >
        {/* Torn / perforated edge path — irregular zigzag */}
        <path
          d="M0,0 L0,14
             L12,18 L22,12 L35,20 L48,11 L58,19 L72,13 L82,21 L96,10
             L108,18 L120,12 L132,20 L146,14 L156,22 L170,11 L182,19
             L194,13 L208,21 L218,10 L232,18 L244,14 L256,20 L268,12
             L280,19 L294,13 L304,21 L318,10 L330,18 L342,14 L356,20
             L368,11 L380,19 L394,13 L404,22 L418,10 L430,18 L442,14
             L456,20 L468,12 L480,19 L494,11 L504,21 L518,13 L530,18
             L542,14 L556,20 L568,10 L580,19 L594,13 L604,22 L618,11
             L630,18 L642,14 L656,20 L668,12 L680,19 L694,11 L704,21
             L718,13 L730,18 L742,14 L756,20 L768,10 L780,19 L794,13
             L804,22 L818,11 L830,18 L842,14 L856,20 L868,12 L880,19
             L894,11 L904,21 L918,13 L930,18 L942,14 L956,20 L968,10
             L980,19 L994,13 L1004,22 L1018,11 L1030,18 L1042,14
             L1056,20 L1068,12 L1080,19 L1094,13 L1104,21 L1118,10
             L1130,18 L1142,14 L1156,20 L1168,11 L1182,19 L1200,14
             L1200,0 Z"
          fill="var(--color-ink)"
        />
        {/* Perforation dashes along the tear line */}
        <line
          x1="0"
          y1="15"
          x2="1200"
          y2="15"
          stroke="var(--color-stamp)"
          strokeWidth="0.8"
          strokeDasharray="6 5"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
