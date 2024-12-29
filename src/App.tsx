import React from 'react';
import { SubjectCards } from './components/SubjectCards';
import { BookOpen, Sparkles, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex -space-x-1">
              <div className="p-2 bg-blue-100 rounded-full">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <div className="p-2 bg-pink-100 rounded-full">
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Flash Cards</h1>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-600">Master your subjects with visual learning</p>
            <span className="text-blue-600">✨</span>
          </div>
        </div>
      </header>
      <main className="py-8">
        <SubjectCards />
      </main>
    </div>
  );
}

export default App;