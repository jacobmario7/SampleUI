import React, { useState } from 'react';
import { MapPin, Clock, Heart } from 'lucide-react';

const JobCard = ({ job }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className="rounded-xl p-6" 
      style={{ backgroundColor: job.backgroundColor }} 
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">${job.salary}/month</h3>
          <div className="mt-7">
            <h4 className="font-medium text-lg text-gray-900">{job.title}</h4>
            <p className="text-gray-600 mt-1">{job.company}</p>
          </div>
        </div>
        <div className="w-12 h-12 mt-14 bg-black rounded-lg flex items-center justify-center shadow-sm">
          <img src={job.logo} alt="Company Logo" />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-5 h-5" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span className="text-sm">{job.date} • {job.applicants} applicants</span>
        </div>
      </div>

      <div className="mt-4 flex gap-2 pt-2">
        <span className="px-3 py-1 border-2 border-gray-400 rounded-full">{job.type}</span>
        <span className="px-3 py-1 border-2 border-gray-400 rounded-full">{job.mode}</span>
        <span className="px-3 py-1 border-2 border-gray-400 rounded-full">{job.experience}</span>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Apply now
        </button>
        <button
          className="w-12 h-11 border border-black rounded-lg flex items-center justify-center hover:bg-black transition-colors"
          onClick={toggleLike}
        >
          <Heart 
            className="w-5 h-5 text-gray-600" 
            fill={isLiked ? "black" : "none"} 
          />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
