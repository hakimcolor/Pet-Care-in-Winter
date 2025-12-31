
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const DataCard = ({ AppData }) => {
  const { user } = useContext(AuthContext); 
  // console.log( 'sldfjdfosdif',user);
  

  return (
    <div className="relative border border-blue-200/40 rounded-2xl shadow-lg p-5 bg-[#E8F3FF] hover:bg-[#DDEFFF] backdrop-blur-sm flex flex-col hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-blue-300/60 overflow-hidden">
      <div className="inset-0 opacity-0 hover:opacity-10 transition-all duration-300 bg-white blur-2xl rounded-2xl"></div>

      <div className="relative w-full overflow-hidden rounded-xl mb-4">
        <img
          src={AppData.image}
          alt={AppData.serviceName}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
        />
      </div>

      <h2 className="text-xl font-bold text-blue-900 tracking-wide mb-2">
        {AppData.serviceName}
      </h2>

      <p className="text-gray-700 mb-1 text-sm">
        <strong>Provider:</strong> {AppData.providerName}
      </p>

      <p className="text-yellow-500 mb-1 text-sm font-medium">
        ⭐ {AppData.rating} / 5
      </p>

      <p className="mb-1 text-gray-800 text-sm">
        <strong>Price:</strong> ${AppData.price} | <strong>Slots:</strong>{' '}
        {AppData.slotsAvailable}
      </p>

      <p className="text-gray-700 text-sm leading-relaxed mt-2 mb-4">
        {AppData.description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {AppData.category}
        </span>

        <NavLink to={user ? '/services' : '/signup'}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-md cursor-pointer">
         View Details
          </button>
        </NavLink>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="animate-[snow_12s_linear_infinite] absolute top-0 left-0 w-full h-full bg-cover"></div>
      </div>
    </div>
  );
};

export default DataCard;
