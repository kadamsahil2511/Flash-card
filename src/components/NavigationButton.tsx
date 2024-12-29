import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}

export function NavigationButton({ direction, onClick, disabled }: NavigationButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute top-1/2 -translate-y-1/2 p-3
        ${direction === 'left' ? 'left-4' : 'right-4'}
        rounded-full bg-white/10 hover:bg-white/20
        disabled:opacity-50 disabled:hover:bg-white/10
        transition-all backdrop-blur-sm
      `}
    >
      <Icon size={32} className="text-white" />
    </button>
  );
}