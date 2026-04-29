"use client";

interface TabelLogoProps {
  className?: string;
  height?: number;
}

export function TabelLogo({ className, height = 28 }: TabelLogoProps) {
  const iconSize = height * 0.72;
  const fontSize = height * 0.68;

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        height,
        gap: height * 0.22,
      }}
    >
      {/* Table/grid geometric mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top row - header bar */}
        <rect
          x="2"
          y="3"
          width="24"
          height="6"
          rx="1.5"
          className="fill-primary"
        />
        {/* Middle row - two cells */}
        <rect
          x="2"
          y="11"
          width="11"
          height="6"
          rx="1.5"
          className="fill-primary opacity-70"
        />
        <rect
          x="15"
          y="11"
          width="11"
          height="6"
          rx="1.5"
          className="fill-primary opacity-70"
        />
        {/* Bottom row - three cells */}
        <rect
          x="2"
          y="19"
          width="7"
          height="6"
          rx="1.5"
          className="fill-primary opacity-40"
        />
        <rect
          x="11"
          y="19"
          width="7"
          height="6"
          rx="1.5"
          className="fill-primary opacity-40"
        />
        <rect
          x="20"
          y="19"
          width="6"
          height="6"
          rx="1.5"
          className="fill-primary opacity-40"
        />
      </svg>
      <span
        style={{
          fontSize,
          fontWeight: 800,
          letterSpacing: "0.04em",
          lineHeight: 1,
        }}
        className="font-sans text-foreground select-none"
      >
        TABEL
      </span>
    </div>
  );
}
