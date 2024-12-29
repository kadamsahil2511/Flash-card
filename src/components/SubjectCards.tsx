import React from 'react';
import { BookOpen, Zap, Atom, Flask, Binary, Calculator, ChevronLeft } from 'lucide-react';

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.find(s => s.name === selectedSubject)?.chapters.map((chapter) => (
              <button
                key={chapter}
                onClick={() => setSelectedChapter(chapter)}
                className="group relative overflow-hidden rounded-xl bg-white p-6 transition-all hover:scale-[1.02] border border-gray-200 hover:shadow-md"
              >
                <div className="relative">
                  <h4 className="text-xl font-semibold text-gray-800">{chapter}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedChapter(null)}
            className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow transition-all border border-gray-200"
          >
            <ChevronLeft className="h-5 w-5 text-blue-600" />
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span className="text-blue-600">Back to Chapters</span>
            </div>
          </button>
          <div className="flex justify-center">
            {/* FlashCard component will be rendered here */}
          </div>
        </div>
      )}
    </div>
  );
}