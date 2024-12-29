import React from 'react';

interface DiagramProps {
  url: string;
  alt: string;
}

export function Diagram({ url, alt }: DiagramProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-white/10 p-2">
      <img 
        src={url} 
        alt={alt} 
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}