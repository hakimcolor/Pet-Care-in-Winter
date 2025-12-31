
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TipsSlider = () => {
  const tips = [
    {
      id: 1,
      title: 'Keep Pets Warm Indoors',
      details:
        'Make sure your pets have a cozy spot with blankets and warm bedding during the cold winter months.',
      image:
        'https://i.ibb.co/sdGZktBG/Gemini-Generated-Image-wxbl5zwxbl5zwxbl.png',
    },
    {
      id: 2,
      title: 'Winter Clothing for Dogs',
      details:
        'Invest in winter coats, boots, and scarves for dogs that are sensitive to cold weather.',
      image:
        'https://i.ibb.co/cSB3Gqdw/Gemini-Generated-Image-ye5q59ye5q59ye5q.png',
    },
    {
      id: 3,
      title: 'Regular Grooming',
      details:
        'Even in winter, regular grooming is important to maintain healthy skin and coat.',
      image:
        'https://i.ibb.co/PsR3Y4dp/Gemini-Generated-Image-x854qlx854qlx854.png',
    },
    {
      id: 4,
      title: 'Hydration & Nutrition',
      details:
        'Provide fresh water regularly and maintain a high-protein diet to keep pets energetic in winter.',
      image:
        'https://i.ibb.co/r2JxYgB8/Gemini-Generated-Image-6t3vjf6t3vjf6t3v.png',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-12 px-4 shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 pt-10">
        Winter Pet Care Slider
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
      >
        {tips.map((tip) => (
          <SwiperSlide key={tip.id}>
            <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-3xl p-8 bg-gradient-to-r from-blue-300 via-blue-100 to-white shadow-2xl hover:shadow-3xl transition duration-500 gap-8">
              
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition duration-300">
                  {tip.title}
                </h3>
                <p className="text-gray-700 text-lg">{tip.details}</p>
              </div>
           
              <div className="flex-1 relative group">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-72 md:h-96 object-cover rounded-2xl transform transition duration-500 group-hover:scale-105 shadow-lg"
                />
                
                <div className="absolute inset-0 bg-white bg-opacity-10 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TipsSlider;
