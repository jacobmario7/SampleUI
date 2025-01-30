import React from 'react';
import JobCard from './JobCard';
import SearchBar from './SearchBar';
import PremiumCard from './PremiumCard';
import moto from '../assets/moto.png';
import micro from '../assets/micro.jpg';
import net from '../assets/net.jpg';
import pay from '../assets/pay.jpg';
import x from '../assets/x.png';

const jobsData = [
  {
    title: 'UX Researcher',
    company: 'Motorolla',
    location: 'Houston, TX',
    salary: 7800,
    date: '5 September',
    applicants: 159,
    type: 'Full-time',
    mode: 'Hybrid',
    experience: '4-6 years',
    logo: moto,
    backgroundColor:'#d1c1f2'
  },
  {
    title: 'Lead UX Researcher',
    company: 'PayPal',
    location: 'Los-Angeles, CA',
    salary: 6000,
    date: '3 September',
    applicants: 179,
    type: 'Project work',
    mode: 'Office',
    experience: '8+ years',
    logo: pay,
    backgroundColor: '#cceeff'
  },
  {
    title: 'Middle UI Designer',
    company: 'Microsoft',
    location: 'Redmond, WA',
    salary: 5250,
    date: '2 September',
    applicants: 196,
    type: 'Full-time',
    mode: 'Office',
    experience: '4-6 years',
    logo: micro,
    backgroundColor: '#bbf7cd'
  },
  {
    title: 'Interface designer',
    company: 'Netflix',
    location: 'San-Francisco, CA',
    salary: 3700,
    date: '29 August',
    applicants: 115,
    type: 'Part-time',
    mode: 'Office',
    experience: '4-6 years',
    logo: net,
    backgroundColor: '#f2c9d1'
  },
  {
    title: 'Art Director',
    company: 'X Corp.',
    location: 'Houston, TX',
    salary: 9500,
    date: '28 August',
    applicants: 159,
    type: 'Full-time',
    mode: 'Hybrid',
    experience: '7-10 years',
    logo: x,
    backgroundColor: '#e7ecef'
  }
];

const JobList = () => {
  return (
    <div className="flex-1">
      <SearchBar />
      <div className="grid grid-cols-3 gap-2 mt-6">
        <JobCard job={jobsData[0]} />
        <PremiumCard />
        {jobsData.slice(1).map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;