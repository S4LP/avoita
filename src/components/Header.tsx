'use client';

import { useState } from 'react';

export default function Header() {
  const [language, setLanguage] = useState('en');

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/favicon.svg" alt="Avoita" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-gray-800">Avoita</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('ru')}
            className={`px-3 py-1 rounded ${language === 'ru' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            RU
          </button>
          <button
            onClick={() => setLanguage('de')}
            className={`px-3 py-1 rounded ${language === 'de' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            DE
          </button>
        </div>
      </div>
    </header>
  );
}
