import React from 'react';
import Sidebar from './components/SideBar';
import JobList from './components/JobList';
import TopBar from './components/TopBar';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center ">
      <div className="bg-white rounded-2xl w-full ">
        <TopBar />
        <div className="flex gap-8 mt-5 pl-3 pr-3 pb-2">
          <Sidebar />
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default App;
