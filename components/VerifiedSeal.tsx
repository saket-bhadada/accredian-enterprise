"use client";

export default function VerifiedSeal({ className = "" }: { className?: string }) {
  const size = 72;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 33;
  const innerR = 27;
  const textR = 30;

  return (
    <div
      className={`seal-rotate ${className}`}
      style={{ width: size, height: size }}
      aria-label="IIT and IIM verified certification seal"
      role="img"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer dashed ring */}
        <circle
          cx={cx}
          cy={cy}
          r={outerR}
          stroke="var(--color-stamp)"
          strokeWidth="1.5"
          strokeDasharray="3 2.5"
          fill="none"
          opacity="0.85"
        />
        {/* Inner solid ring */}
        <circle
          cx={cx}
          cy={cy}
          r={innerR}
          stroke="var(--color-stamp)"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />

        {/* Circular text path definition */}
        <defs>
          <path
            id="seal-text-path"
            d={`M ${cx},${cy} m -${textR},0 a ${textR},${textR} 0 1,1 ${textR * 2},0 a ${textR},${textR} 0 1,1 -${textR * 2},0`}
          />
        </defs>

        {/* Rim text */}
        <text
          className="font-mono"
          fill="var(--color-stamp)"
          fontSize="6.5"
          fontWeight="600"
          letterSpacing="2.5"
          opacity="0.9"
        >
          <textPath href="#seal-text-path" startOffset="0%">
            IIT · IIM · VERIFIED · IIT · IIM · VERIFIED ·{" "}
          </textPath>
        </text>

        {/* Center star glyph */}
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--color-stamp)"
          fontSize="16"
          opacity="0.85"
        >
          ★
        </text>
      </svg>
    </div>
  );
}
