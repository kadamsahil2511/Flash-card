import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface FormulaProps {
  tex: string;
}

export function Formula({ tex }: FormulaProps) {
  return (
    <div className="bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
      <InlineMath math={tex} />
    </div>
  );
}