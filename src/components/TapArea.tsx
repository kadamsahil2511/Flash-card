import React from 'react';

interface TapAreaProps {
  side: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

export function TapArea({ side, onClick, disabled }: TapAreaProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute top-0 bottom-0 w-1/2 cursor-default
        ${side === 'left' ? 'left-0' : 'right-0'}
        disabled:cursor-not-allowed
      `}
      aria-label={`Go to ${side === 'left' ? 'previous' : 'next'} card`}
    />
  );
}