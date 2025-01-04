import React, { useState } from 'react';
import { Formula } from './Formula';
import { TapArea } from './TapArea';
import { ProgressBar } from './ProgressBar';
import { Modal } from './Modal';
import { ThumbsUp, ThumbsDown, BookOpen } from 'lucide-react';

interface FlashCardProps {
  topic: string;
  content: string;
  formula?: string;
  proportionality?: string[];
  currentIndex: number;
  totalCards: number;
  onNext: () => void;
  onPrev: () => void;
  onLike: () => void;
  onDislike: () => void;
  onStartRevision: () => void;
  hasRevisionCards: boolean;
  isInRevisionMode: boolean;
}

export function FlashCard({
  topic,
  content,
  formula,
  proportionality,
  currentIndex,
  totalCards,
  onNext,
  onPrev,
  onLike,
  onDislike,
  onStartRevision,
  hasRevisionCards,
  isInRevisionMode
}: FlashCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative mb-6">
        <div className="min-h-[400px] bg-white rounded-xl border-4 border-purple-500 overflow-hidden">
          {/* Header */}
          <div className="bg-purple-50 px-8 py-6 border-b-2 border-purple-200">
            <h2 className="text-3xl font-bold text-gray-800 text-center">{topic}</h2>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="w-full max-w-2xl mx-auto space-y-8">
              <p className="text-xl text-center leading-relaxed text-gray-700">{content}</p>
              
              {formula && (
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Formula:</h3>
                  <Formula tex={formula} />
                </div>
              )}
              
              {proportionality && proportionality.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Relationships:</h3>
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

        <ProgressBar currentIndex={currentIndex} totalCards={totalCards} />
        <TapArea side="left" onClick={onPrev} disabled={currentIndex === 0} />
        <TapArea side="right" onClick={onNext} disabled={currentIndex === totalCards - 1} />
      </div>

      {/* Like/Dislike Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={onLike}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-blue-50 text-blue-500 transition-colors border-2 border-blue-500"
        >
          <ThumbsUp size={20} />
          <span className="font-medium">I Know This</span>
        </button>
        <button
          onClick={onDislike}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-purple-50 text-purple-500 transition-colors border-2 border-purple-500"
        >
          <ThumbsDown size={20} />
          <span className="font-medium">Need Review</span>
        </button>
      </div>

      {/* Revision Button */}
      {hasRevisionCards && !isInRevisionMode && (
        <div className="flex justify-center">
          <button
            onClick={onStartRevision}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-blue-50 text-blue-600 transition-colors border-2 border-blue-500"
          >
            <BookOpen size={20} />
            <span className="font-medium">Start Revision</span>
          </button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        topic={topic}
        content={content}
        formula={formula}
        proportionality={proportionality}
      />
    </div>
  );
}