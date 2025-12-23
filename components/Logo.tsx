
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sun - Pale Yellow */}
      <circle cx="256" cy="340" r="130" fill="#FFE57E" fillOpacity="0.9" />
      
      {/* Ground/Hill - Layered Greens */}
      <path d="M120 440C180 410 332 410 392 440H120Z" fill="#B8D99F" />
      <path d="M160 450C210 435 302 435 352 450H160Z" fill="#9DC384" />

      {/* Human Trunk - Warm Grey silhouette */}
      <g fill="#A6A69D">
        {/* Head */}
        <circle cx="256" cy="255" r="18" />
        {/* Body & Arms forming the tree structure */}
        <path d="M256 280C210 280 160 320 140 370C160 440 210 455 256 455C302 455 352 440 372 370C352 320 302 280 256 280Z" />
        <path d="M160 235C195 275 230 280 256 280C282 280 317 275 352 235C325 275 290 310 256 310C222 310 187 275 160 235Z" />
      </g>

      {/* Lush Canopy of Leaves - Teal/Mint */}
      <g fill="#96D0BD">
        {/* We use a loop-like pattern of leaf shapes to match the image density */}
        {/* Row 1 - Top Center */}
        <ellipse cx="256" cy="80" rx="10" ry="16" />
        <ellipse cx="225" cy="95" rx="10" ry="16" transform="rotate(-15, 225, 95)" />
        <ellipse cx="287" cy="95" rx="10" ry="16" transform="rotate(15, 287, 95)" />
        
        {/* Row 2 */}
        <ellipse cx="190" cy="120" rx="10" ry="16" transform="rotate(-30, 190, 120)" />
        <ellipse cx="220" cy="135" rx="10" ry="16" transform="rotate(-10, 220, 135)" />
        <ellipse cx="256" cy="145" rx="10" ry="16" />
        <ellipse cx="292" cy="135" rx="10" ry="16" transform="rotate(10, 292, 135)" />
        <ellipse cx="322" cy="120" rx="10" ry="16" transform="rotate(30, 322, 120)" />

        {/* Row 3 - Broader */}
        <ellipse cx="150" cy="155" rx="10" ry="16" transform="rotate(-45, 150, 155)" />
        <ellipse cx="185" cy="175" rx="10" ry="16" transform="rotate(-30, 185, 175)" />
        <ellipse cx="220" cy="190" rx="10" ry="16" transform="rotate(-15, 220, 190)" />
        <ellipse cx="256" cy="200" rx="10" ry="16" />
        <ellipse cx="292" cy="190" rx="10" ry="16" transform="rotate(15, 292, 190)" />
        <ellipse cx="327" cy="175" rx="10" ry="16" transform="rotate(30, 327, 175)" />
        <ellipse cx="362" cy="155" rx="10" ry="16" transform="rotate(45, 362, 155)" />

        {/* Outer Edges */}
        <ellipse cx="110" cy="190" rx="10" ry="16" transform="rotate(-60, 110, 190)" />
        <ellipse cx="130" cy="220" rx="10" ry="16" transform="rotate(-50, 130, 220)" />
        <ellipse cx="382" cy="220" rx="10" ry="16" transform="rotate(50, 382, 220)" />
        <ellipse cx="402" cy="190" rx="10" ry="16" transform="rotate(60, 402, 190)" />
        
        {/* Bottom Canopy Layer */}
        <ellipse cx="80" cy="225" rx="10" ry="16" transform="rotate(-80, 80, 225)" />
        <ellipse cx="432" cy="225" rx="10" ry="16" transform="rotate(80, 432, 225)" />
        <ellipse cx="105" cy="260" rx="10" ry="16" transform="rotate(-70, 105, 260)" />
        <ellipse cx="407" cy="260" rx="10" ry="16" transform="rotate(70, 407, 260)" />
        
        {/* Filler Leaves */}
        <ellipse cx="256" cy="110" rx="8" ry="14" />
        <ellipse cx="210" cy="160" rx="8" ry="14" transform="rotate(-20, 210, 160)" />
        <ellipse cx="302" cy="160" rx="8" ry="14" transform="rotate(20, 302, 160)" />
        <ellipse cx="170" cy="210" rx="8" ry="14" transform="rotate(-40, 170, 210)" />
        <ellipse cx="342" cy="210" rx="8" ry="14" transform="rotate(40, 342, 210)" />
        <ellipse cx="256" cy="45" rx="8" ry="14" />
      </g>
    </svg>
  );
};
