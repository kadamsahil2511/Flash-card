import React, { useState } from 'react';
import { BookOpen, Zap, Atom, Flask, Binary, Calculator, ChevronLeft, PartyPopper } from 'lucide-react';
import { FlashCard } from './FlashCard';
import { physicsFlashcards } from '../data/physicsFlashcards';

// Add progress tracking state
interface ChapterProgress {
  [key: string]: number;
}

interface RevisionCards {
  [chapter: string]: string[]; // Array of card topics that need revision
}

// Add new interface to track card states
interface CardStates {
  [chapter: string]: {
    [topic: string]: 'known' | 'review' | 'unanswered';
  };
}

const subjects = [
  {
    name: 'Physics',
    icon: Atom,
    chapters: [
      'Electric Charges and Fields',
      'Electrostatic Potential',
      'Current Electricity',
      'Moving Charges and Magnetism',
      'Electromagnetic Induction',
      'Ray Optics',
      'Wave Optics',
      'Dual Nature of Matter'
    ]
  },
  // Other subjects can be added here
];

export function SubjectCards() {
  const [selectedSubject, setSelectedSubject] = React.useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = React.useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const [revisionCards, setRevisionCards] = useState<RevisionCards>({});
  const [isRevisionMode, setIsRevisionMode] = useState(false);
  const [cardStates, setCardStates] = useState<CardStates>({});

  // Mock progress data (you would normally get this from your app state/backend)
  const chapterProgress: ChapterProgress = {
    'Electric Charges and Fields': 75,
    'Electrostatic Potential': 60,
    'Current Electricity': 40,
    'Moving Charges and Magnetism': 90,
    'Electromagnetic Induction': 30,
    'Ray Optics': 85,
    'Wave Optics': 20,
    'Dual Nature of Matter': 50
  };

  // Get flashcards for the selected chapter
  const chapterFlashcards = React.useMemo(() => {
    if (!selectedChapter) return [];
    
    if (isRevisionMode) {
      // In revision mode, only show cards that are marked for revision
      return physicsFlashcards.filter(card => 
        revisionCards[selectedChapter]?.includes(card.topic)
      );
    }

    // Normal mode - show all cards for the chapter
    return physicsFlashcards.filter(card => {
      const cardTopic = card.topic.toLowerCase();
      const chapter = selectedChapter.toLowerCase();
      return (
        cardTopic.includes(chapter) ||
        chapter.includes(cardTopic) ||
        // Add specific mappings for chapters and their topics
        (chapter === 'electric charges and fields' && 
          (cardTopic.includes('electric charge') || 
           cardTopic.includes('coulomb') || 
           cardTopic.includes('electric field') ||
           cardTopic.includes('gauss'))) ||
        (chapter === 'electrostatic potential' && 
          (cardTopic.includes('potential') || 
           cardTopic.includes('capacit'))) ||
        (chapter === 'current electricity' && 
          (cardTopic.includes('current') || 
           cardTopic.includes('ohm') || 
           cardTopic.includes('resist') ||
           cardTopic.includes('kirchhoff')))
      );
    });
  }, [selectedChapter, isRevisionMode, revisionCards]);

  const getRemainingCards = () => {
    if (!selectedChapter) return [];

    if (isRevisionMode) {
      // In revision mode, only show cards that need review or haven't been answered
      return physicsFlashcards.filter(card => {
        const cardState = cardStates[selectedChapter]?.[card.topic];
        return cardState === 'review' || !cardState;
      });
    }
    // In normal mode, show all cards for the chapter
    return chapterFlashcards;
  };

  // Get the current card
  const remainingCards = getRemainingCards();
  const currentFlashcard = remainingCards[currentCardIndex];

  const handleNextCard = () => {
    const nextIndex = currentCardIndex + 1;
    if (nextIndex < chapterFlashcards.length) {
      setCurrentCardIndex(nextIndex);
    }
  };

  const handlePrevCard = () => {
    const prevIndex = currentCardIndex - 1;
    if (prevIndex >= 0) {
      setCurrentCardIndex(prevIndex);
    }
  };

  const handleLike = () => {
    if (selectedChapter && currentFlashcard) {
      // Update card state to 'known'
      const newCardStates = {
        ...cardStates,
        [selectedChapter]: {
          ...cardStates[selectedChapter],
          [currentFlashcard.topic]: 'known'
        }
      };
      setCardStates(newCardStates);

      // Remove from revision if present
      if (revisionCards[selectedChapter]) {
        const newRevisionCards = { ...revisionCards };
        newRevisionCards[selectedChapter] = newRevisionCards[selectedChapter].filter(
          topic => topic !== currentFlashcard.topic
        );
        setRevisionCards(newRevisionCards);
      }

      // Move to next card
      const nextIndex = currentCardIndex + 1;
      if (nextIndex < getRemainingCards().length) {
        setCurrentCardIndex(nextIndex);
      } else if (hasUnansweredOrReviewCards()) {
        setIsRevisionMode(true);
        setCurrentCardIndex(0);
      }
    }
  };

  const handleDislike = () => {
    if (selectedChapter && currentFlashcard) {
      // Update card state to 'review'
      const newCardStates = {
        ...cardStates,
        [selectedChapter]: {
          ...cardStates[selectedChapter],
          [currentFlashcard.topic]: 'review'
        }
      };
      setCardStates(newCardStates);

      // Add to revision cards
      const newRevisionCards = { ...revisionCards };
      if (!newRevisionCards[selectedChapter]) {
        newRevisionCards[selectedChapter] = [];
      }
      if (!newRevisionCards[selectedChapter].includes(currentFlashcard.topic)) {
        newRevisionCards[selectedChapter] = [...newRevisionCards[selectedChapter], currentFlashcard.topic];
      }
      setRevisionCards(newRevisionCards);

      // Move to next card
      const nextIndex = currentCardIndex + 1;
      if (nextIndex < getRemainingCards().length) {
        setCurrentCardIndex(nextIndex);
      } else if (hasUnansweredOrReviewCards()) {
        setIsRevisionMode(true);
        setCurrentCardIndex(0);
      }
    }
  };

  const handleStartRevision = () => {
    setIsRevisionMode(true);
    setCurrentCardIndex(0);
  };

  const handleExitRevision = () => {
    setIsRevisionMode(false);
    setCurrentCardIndex(0);
  };

  const CompletionMessage = () => (
    <div className="min-h-[400px] w-full max-w-2xl bg-white rounded-xl border-4 border-blue-500 overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center p-8 text-center">
        <PartyPopper className="w-16 h-16 text-blue-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Congratulations! 🎉
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          You've mastered all the cards in this chapter!
        </p>
        <button
          onClick={() => {
            setSelectedChapter(null);
            setCurrentCardIndex(0);
            setIsRevisionMode(false);
          }}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-blue-50 text-blue-600 transition-colors border-2 border-blue-500"
        >
          <BookOpen className="w-5 h-5" />
          <span className="font-medium">Back to Chapters</span>
        </button>
      </div>
    </div>
  );

  const hasUnansweredOrReviewCards = () => {
    if (!selectedChapter) return false;
    
    return chapterFlashcards.some(card => {
      const cardState = cardStates[selectedChapter]?.[card.topic];
      return cardState === 'review' || !cardState; // !cardState means unanswered
    });
  };

  const isChapterComplete = () => {
    if (!selectedChapter) return false;
    
    // Chapter is complete when all cards are marked as 'known'
    return chapterFlashcards.every(card => 
      cardStates[selectedChapter]?.[card.topic] === 'known'
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {!selectedSubject ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <button
              key={subject.name}
              onClick={() => setSelectedSubject(subject.name)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 p-8 transition-all hover:scale-[1.02] border border-blue-200/50 hover:shadow-lg"
            >
              <div className="relative flex items-center space-x-4">
                <subject.icon className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">{subject.name}</h3>
              </div>
            </button>
          ))}
        </div>
      ) : !selectedChapter ? (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedSubject(null)}
            className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow transition-all border border-gray-200"
          >
            <ChevronLeft className="h-5 w-5 text-blue-600" />
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span className="text-blue-600">Back to Subjects</span>
            </div>
          </button>

          <div className="grid grid-cols-1 gap-4">
            {subjects.find(s => s.name === selectedSubject)?.chapters.map((chapter) => (
              <button
                key={chapter}
                onClick={() => setSelectedChapter(chapter)}
                className="group relative overflow-hidden rounded-xl bg-white p-4 transition-all hover:scale-[1.01] border border-gray-200 hover:shadow-md flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <h4 className="text-lg font-medium text-gray-800 text-left">{chapter}</h4>
                </div>
                
                {/* Circular Progress Indicator */}
                <div className="relative w-10 h-10">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      className="stroke-current text-gray-200"
                      strokeWidth="3"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      className="stroke-current text-blue-500"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 16}`}
                      strokeDashoffset={`${2 * Math.PI * 16 * (1 - chapterProgress[chapter] / 100)}`}
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedChapter(null);
                setCurrentCardIndex(0);
                setIsRevisionMode(false);
              }}
              className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow transition-all border border-gray-200"
            >
              <ChevronLeft className="h-5 w-5 text-blue-600" />
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600" />
                <span className="text-blue-600">Back to Chapters</span>
              </div>
            </button>

            {isRevisionMode && (
              <button
                onClick={handleExitRevision}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-purple-600 border border-purple-200 hover:bg-purple-50"
              >
                <span>Exit Revision</span>
              </button>
            )}
          </div>
          
          <div className="flex justify-center">
            {isChapterComplete() ? (
              <CompletionMessage />
            ) : currentFlashcard ? (
              <FlashCard
                topic={currentFlashcard.topic}
                content={currentFlashcard.content}
                formula={currentFlashcard.formula}
                proportionality={currentFlashcard.proportionality}
                currentIndex={currentCardIndex}
                totalCards={remainingCards.length}
                onNext={handleNextCard}
                onPrev={handlePrevCard}
                onLike={handleLike}
                onDislike={handleDislike}
                onStartRevision={handleStartRevision}
                hasRevisionCards={
                  !isRevisionMode && 
                  (revisionCards[selectedChapter]?.length ?? 0) > 0
                }
                isInRevisionMode={isRevisionMode}
              />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}