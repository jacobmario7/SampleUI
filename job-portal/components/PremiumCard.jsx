import React from 'react';
import { LinearGradient } from 'react-text-gradients'

const PremiumCard = () => {
  return (
    <div className="bg-gradient-to-tr from-rose-600 via-purple-900 to-purple-600 rounded-xl p-6 text-white flex flex-col h-full" >
      <div>
        <h1 className="text-4xl font-semibold"><LinearGradient gradient={['to left', '#ff0000 ,#ffffff']}>
    Find your<br></br>dream job
  </LinearGradient></h1>
        <p className="mt-4 text-lg text-gray-100">Get hired faster with<br></br> premium perks! Boost<br></br> your visibility!</p>
      </div>
      <button className="mt-auto w-full bg-white text-gray-900 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors">
        Get PRO for $12 per month
      </button>
    </div>
  );
};

export default PremiumCard;