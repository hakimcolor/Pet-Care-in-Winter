
import React from 'react';
import HomeSlider from '../Componentes/HomeSlider';
import { useLoaderData } from 'react-router-dom';
import DataCard from './DataCard';
import WinterTips from './WinterTips.JSX';
import ExpertVetsSlider from './ExpertVetsSlider';
import TestimonialSlider from '../Componentes/TestimonialSlider';

const Home = () => {
  const AppData = useLoaderData();
  const data = AppData || [];

  return (
    <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-white min-h-screen pt-5">
      <HomeSlider />

   
      <div className="text-center mt-12 mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-3">
          Our Popular Services
        </h1>
        <p className="text-gray-600 text-lg">
          Here are some of our most requested pet care services this winter.
        </p>
      </div>

   
      {data.length === 0 ? (
        <div className="text-center mt-10 text-gray-600 text-xl">
          No Data Available
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 max-w-7xl mx-auto">
          {data.map((item) => (
            <DataCard key={item.serviceId} AppData={item} />
          ))}
        </div>
      )}

    
      <WinterTips />
      <ExpertVetsSlider />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
