import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark" | "stacked";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl" | "responsive";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "full",
  theme = "light",
  size = "responsive",
}) => {
  const isDark = theme === "dark";
  const primaryStroke = isDark ? "#FFFFFF" : "#1A659E";

  // Responsive vs static size configurations
  const isResponsive = size === "responsive";

  const sizeMap = {
    sm: { mark: 28, textScale: "text-sm sm:text-base", subScale: "text-[8px] sm:text-[9px]" },
    md: { mark: 36, textScale: "text-base sm:text-xl", subScale: "text-[9px] sm:text-[11px]" },
    lg: { mark: 48, textScale: "text-xl sm:text-2xl", subScale: "text-[10px] sm:text-xs" },
    xl: { mark: 64, textScale: "text-2xl sm:text-3xl", subScale: "text-xs sm:text-sm" },
    responsive: { mark: 34, textScale: "text-sm xs:text-base sm:text-xl", subScale: "text-[8px] xs:text-[9px] sm:text-[10px]" },
  };

  const currentSize = sizeMap[size];

  // SVG Mark matching exact geometry from user's brand logo
  const LogoMark = (
    <svg
      width={currentSize.mark}
      height={currentSize.mark}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      aria-label="Logo ZOÉ DIGITECH"
    >
      {/* Outer Golden Amber Ring */}
      <circle
        cx="70"
        cy="70"
        r="64"
        stroke="#EBA818"
        strokeWidth="3.5"
      />
      {/* Inner Ring (adapts to light / dark background for 100% contrast) */}
      <circle
        cx="70"
        cy="70"
        r="57"
        stroke={primaryStroke}
        strokeWidth="2.5"
      />

      {/* Monogram Shape: Primary frame + Gold Z interior */}
      {/* Upper bar & right stem */}
      <path
        d="M38 43H92C97.5228 43 102 47.4772 102 53V87C102 92.5228 97.5228 97 92 97H38V85H89C90.1046 85 91 84.1046 91 83V57C91 55.8954 90.1046 55 89 55H38V43Z"
        fill={primaryStroke}
      />

      {/* Diagonal & Inner Gold 'Z' element */}
      <path
        d="M38 52H80L45 88H88V80H47L82 44H38V52Z"
        fill="#EBA818"
      />

      {/* Central horizontal anchor bar in Gold */}
      <rect
        x="38"
        y="58"
        width="44"
        height="10"
        rx="2"
        fill="#EBA818"
      />

      {/* Bottom connecting bar */}
      <rect
        x="38"
        y="86"
        width="54"
        height="11"
        rx="2"
        fill={primaryStroke}
      />
    </svg>
  );

  if (variant === "mark") {
    return <div className={`inline-flex items-center shrink-0 ${className}`}>{LogoMark}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none shrink-0 ${className}`}>
      {LogoMark}
      <div className="flex flex-col items-center justify-center leading-none text-center">
        <div className={`font-bold tracking-tight ${currentSize.textScale} flex items-baseline justify-center gap-1 sm:gap-1.5 whitespace-nowrap`}>
          <span className="text-[#EBA818] font-extrabold font-display">ZOÉ</span>
          <span
            className={`font-display font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-[#1A659E]"
            }`}
          >
            DIGITECH
          </span>
        </div>
        <span
          className={`font-semibold tracking-[0.32em] pl-[0.32em] uppercase ${currentSize.subScale} text-[#EBA818] mt-0.5 sm:mt-1 text-center w-full block`}
        >
          SOLUTION
        </span>
      </div>
    </div>
  );
};
