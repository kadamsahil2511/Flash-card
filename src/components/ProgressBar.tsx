import React from 'react';

interface ProgressBarProps {
  currentIndex: number;
  totalCards: number;
}

export function ProgressBar({ currentIndex, totalCards }: ProgressBarProps) {
  return (
    <div className="absolute top-0 left-0 right-0 flex gap-1 p-4">
      {Array.from({ length: totalCards }).map((_, idx) => (
        <div
          key={idx}
          className={`h-1 flex-1 rounded-full transition-colors ${
            idx <= currentIndex ? 'bg-white' : 'bg-white/30'
          }`}
        />
      ))}
    </div>
  );
}