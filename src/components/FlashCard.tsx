import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { Formula } from './Formula';
import { Diagram } from './Diagram';
import { Modal } from './Modal';
import { ProgressBar } from './ProgressBar';
import { TapArea } from './TapArea';

interface FlashCardProps {
  topic: string;
  content: string;
  formula?: string;
  proportionality?: string[];
  diagram?: string;
  currentIndex: number;
  totalCards: number;
  onNext: () => void;
  onPrev: () => void;
}

export function FlashCard(props: FlashCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-full h-[600px] bg-gradient-to-br from-purple-600/90 to-blue-500/90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
        <ProgressBar currentIndex={props.currentIndex} totalCards={props.totalCards} />

        <div className="h-full flex flex-col items-center justify-center px-8 text-white">
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Maximize2 size={20} className="text-white" />
            </button>
          </div>

          <h2 className="text-2xl font-bold mb-4 bg-black/20 px-6 py-2 rounded-full">
            {props.topic}
          </h2>
          
          {props.diagram && (
            <div className="mb-6 w-64 h-64">
              <Diagram url={props.diagram} alt={props.topic} />
            </div>
          )}
          
          <p className="text-xl text-center leading-relaxed mb-4 bg-black/10 p-4 rounded-xl backdrop-blur-sm">
            {props.content}
          </p>
          
          {props.formula && (
            <div className="mb-4">
              <Formula tex={props.formula} />
            </div>
          )}
          
          {props.proportionality && props.proportionality.length > 0 && (
            <div className="text-sm opacity-90 text-center space-y-2 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
              {props.proportionality.map((prop, index) => (
                <Formula key={index} tex={prop} />
              ))}
            </div>
          )}
        </div>

        <TapArea
          side="left"
          onClick={props.onPrev}
          disabled={props.currentIndex === 0}
        />
        <TapArea
          side="right"
          onClick={props.onNext}
          disabled={props.currentIndex === props.totalCards - 1}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        {...props}
      />
    </>
  );
}