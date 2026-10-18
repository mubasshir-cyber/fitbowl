import React from 'react';

export function LeafSprigLeft({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute z-0 opacity-80 ${className}`}
    >
      <svg
        width="130"
        height="180"
        viewBox="0 0 130 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#2F674F]"
      >
        {/* Main stem */}
        <path
          d="M10 170 Q35 110 50 20"
          stroke="#385F45"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Leaf pairs */}
        <path
          d="M20 145 C5 130 10 115 30 132 C30 132 25 145 20 145 Z"
          fill="#3E6B4F"
        />
        <path
          d="M26 138 C45 125 45 110 32 128 C32 128 26 138 26 138 Z"
          fill="#4F8562"
        />
        <path
          d="M32 110 C15 95 20 80 40 98 C40 98 35 110 32 110 Z"
          fill="#3E6B4F"
        />
        <path
          d="M37 102 C60 90 60 75 44 94 C44 94 37 102 37 102 Z"
          fill="#5B9A71"
        />
        <path
          d="M42 75 C25 60 30 45 48 62 C48 62 45 75 42 75 Z"
          fill="#4F8562"
        />
        <path
          d="M46 68 C68 55 68 40 52 59 C52 59 46 68 46 68 Z"
          fill="#6EAE85"
        />
        {/* Top leaf tip */}
        <path
          d="M50 20 C42 5 58 5 50 20 Z"
          fill="#5B9A71"
        />
      </svg>
    </div>
  );
}

export function LeafSprigRight({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute z-0 opacity-80 ${className}`}
    >
      <svg
        width="130"
        height="180"
        viewBox="0 0 130 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#2F674F]"
      >
        {/* Main stem */}
        <path
          d="M120 170 Q95 110 80 20"
          stroke="#385F45"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Leaf pairs */}
        <path
          d="M110 145 C125 130 120 115 100 132 C100 132 105 145 110 145 Z"
          fill="#3E6B4F"
        />
        <path
          d="M104 138 C85 125 85 110 98 128 C98 128 104 138 104 138 Z"
          fill="#4F8562"
        />
        <path
          d="M98 110 C115 95 110 80 90 98 C90 98 95 110 98 110 Z"
          fill="#3E6B4F"
        />
        <path
          d="M93 102 C70 90 70 75 86 94 C86 94 93 102 93 102 Z"
          fill="#5B9A71"
        />
        <path
          d="M88 75 C105 60 100 45 82 62 C82 62 85 75 88 75 Z"
          fill="#4F8562"
        />
        <path
          d="M84 68 C62 55 62 40 78 59 C78 59 84 68 84 68 Z"
          fill="#6EAE85"
        />
        {/* Top leaf tip */}
        <path
          d="M80 20 C88 5 72 5 80 20 Z"
          fill="#5B9A71"
        />
      </svg>
    </div>
  );
}

export function SingleHerbLeaf({
  className = '',
  rotate = '0deg',
}: {
  className?: string;
  rotate?: string;
}) {
  return (
    <div
      aria-hidden="true"
      style={{ transform: `rotate(${rotate})` }}
      className={`pointer-events-none select-none absolute z-0 opacity-70 ${className}`}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 5 C30 15 32 30 20 35 C8 30 10 15 20 5 Z"
          fill="#4F8562"
        />
        <path
          d="M20 7 Q20 20 20 33"
          stroke="#2E523A"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
