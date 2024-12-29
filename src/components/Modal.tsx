import React from 'react';
import { X } from 'lucide-react';
import { Formula } from './Formula';
import { Diagram } from './Diagram';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: string;
  content: string;
  formula?: string;
  proportionality?: string[];
  diagram?: string;
}

export function Modal({
  isOpen,
  onClose,
  topic,
  content,
  formula,
  proportionality,
  diagram
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl bg-gradient-to-br from-purple-600/95 to-blue-500/95 rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={20} className="text-white" />
        </button>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white bg-black/20 px-6 py-2 rounded-full inline-block">
                {topic}
              </h2>
              
              <p className="text-xl text-white leading-relaxed bg-black/10 p-6 rounded-xl backdrop-blur-sm">
                {content}
              </p>

              {formula && (
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-white text-lg mb-4">Formula:</h3>
                  <Formula tex={formula} />
                </div>
              )}
            </div>

            <div className="space-y-6">
              {diagram && (
                <div className="aspect-square">
                  <Diagram url={diagram} alt={topic} />
                </div>
              )}

              {proportionality && proportionality.length > 0 && (
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-white text-lg mb-4">Relationships:</h3>
                  <div className="space-y-3">
                    {proportionality.map((prop, index) => (
                      <Formula key={index} tex={prop} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}