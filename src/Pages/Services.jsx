import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Services = () => {
  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email || '');
      setName(user.displayName || '');
    }
  }, [user]);

  const handleBooking = () => {
    if (!email || !name) {
      toast.error('Please fill in both fields!');
      return;
    }
    toast.success('Booking successful!');


    setEmail('');
    setName('');
  };

  if (!user) {
    return (
      <div className="text-center mt-10">
        Please login to access Services page.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-400 via-blue-100 to-blue-600 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome {user.displayName}!
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleBooking}
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Book Now
          </button>
        </div>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Services;
