import './Logo.css'

export default function Logo({ size = 32 }) {
  return (
    <svg
      className="logo"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#16A34A" />

      {/* Left bracket < */}
      <path
        className="logo__bracket logo__bracket--left"
        d="M13 9L7 16l6 7"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Right bracket > */}
      <path
        className="logo__bracket logo__bracket--right"
        d="M19 9l6 7-6 7"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Forward slash / */}
      <line
        className="logo__slash"
        x1="17.5"
        y1="8"
        x2="14.5"
        y2="24"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Blinking cursor */}
      <line
        className="logo__cursor"
        x1="16"
        y1="12"
        x2="16"
        y2="20"
        stroke="#bbf7d0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
