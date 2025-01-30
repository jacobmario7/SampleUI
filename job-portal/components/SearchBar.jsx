import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex gap-4 items-center">
      
      <button className="w-12 h-12 bg-white-900 text-gray-600 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 transition">
        <Search className="w-5 h-5" />
      </button>

      <h1 className="text-xl font-semibold text-gray-900 mr-44">UX/UI Designer</h1>

      <button className="px-4 py-2.5 ml-96 bg-white border border-black rounded-full flex items-center gap-2 text-black">
        United States
        <svg className="h-6 w-6 text-white" fill="black" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </button>

      <button className="px-4 py-2.5 bg-white border border-black rounded-full flex items-center gap-2 text-black">
        5+ years experience
        <svg className="h-6 w-6 text-white" fill="black" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
