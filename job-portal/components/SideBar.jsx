import React, { useState } from 'react';
import './Sidebar.css'; 

const Sidebar = () => {
  const [selections, setSelections] = useState({
    workSchedule: new Set(),
    employmentType: new Set(),
    workStyle: new Set()
  });
  
  const [range] = useState([12, 70]); 

  const handleReset = () => {
    setSelections({
      workSchedule: new Set(),
      employmentType: new Set(),
      workStyle: new Set()
    });
  };

  return (
    <div className="w-64 flex-shrink-0 border border-gray-200 rounded-2xl p-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button 
          className="text-purple-600 text-sm font-medium hover:text-purple-700"
          onClick={handleReset}
        >
          Reset all
        </button>
      </div>

      <div className="space-y-3">
        <FilterSection
          title="Work schedule"
          options={['Full-time', 'Part-time', 'Internship', 'Project work', 'Volunteering']}
          selected={selections.workSchedule}
          onChange={(option) => {
            const newSet = new Set(selections.workSchedule);
            if (newSet.has(option)) {
              newSet.delete(option);
            } else {
              newSet.add(option);
            }
            setSelections({...selections, workSchedule: newSet});
          }}
        />

        <div className="mb-6">
          <h3 className="font-medium text-black mb-4">Salary range</h3>
          <div className="relative h-24 bg-white rounded-lg mb-3">
            
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end px-2">
              {[
                20, 15, 25, 12, 15, 25, 35, 45, 55, 80,
                75, 95, 80, 70, 70, 70, 80, 80, 60, 35,
                45, 45, 55, 55, 45, 35, 30, 45, 60, 45,
              ].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 mx-0.5 rounded-t"
                  style={{
                    height: `${height}%`,
                    backgroundColor: i >= 3 && i <= 32 ? '#000000' : '#808080',
                    opacity: i >= 3 && i <= 22 ? 1 : 0.2
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="relative w-full h-1 -mt-3 bg-gray-200 mb-4 rounded">
            <div 
              className="absolute h-full bg-black"
              style={{
                left: `${range[0]}%`,
                right: `${100 - range[1]}%`
              }}
            />
            
            <div 
              className="absolute w-3 h-3 bg-black rounded-full -mt-1 cursor-pointer"
              style={{ left: `${range[0]}%` }}
            />
            <div 
              className="absolute w-3 h-3 bg-black rounded-full -mt-1 cursor-pointer"
              style={{ left: `${range[1]}%` }}
            />
          </div>

          <div className="flex justify-between -mt-2 text-sm font-semibold text-black">
            <span className="px-7 py-2 border border-gray-200 rounded-lg text-xs">
              2,500<span>&nbsp;&nbsp; </span>$
            </span>
            <span className="px-8 py-2 border border-gray-200 rounded-lg text-xs">
              10,000<span>&nbsp;&nbsp; </span> $
            </span>
          </div>
        </div>

        <FilterSection
          title="Employment type"
          options={['Full day', 'Flexible schedule', 'Shift work', 'Distant work']}
          selected={selections.employmentType}
          onChange={(option) => {
            const newSet = new Set(selections.employmentType);
            if (newSet.has(option)) {
              newSet.delete(option);
            } else {
              newSet.add(option);
            }
            setSelections({...selections, employmentType: newSet});
          }}
        />

        <FilterSection
          title="Work style"
          options={['Office', 'Hybrid', 'Remote']}
          selected={selections.workStyle}
          onChange={(option) => {
            const newSet = new Set(selections.workStyle);
            if (newSet.has(option)) {
              newSet.delete(option);
            } else {
              newSet.add(option);
            }
            setSelections({...selections, workStyle: newSet});
          }}
        />
      </div>
    </div>
  );
};

const FilterSection = ({ title, options, selected, onChange }) => (
  <div>
    <h3 className="font-medium text-gray-900 mb-3">{title}</h3>
    <div className="space-y-3">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={selected.has(option)}
            onChange={() => onChange(option)}
            className="custom-checkbox"
          />
          <span className="text-gray-600">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

export default Sidebar;