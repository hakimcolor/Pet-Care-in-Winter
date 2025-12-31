import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonialsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    feedback:
      'Great service! My dog loved the care and attention from the team.',
    rating: 5,
    img: 'https://i.ibb.co.com/k6zSHj9R/Gemini-Generated-Image-sux4s2sux4s2sux4.png',
  },
  {
    id: 2,
    name: 'Mark Smith',
    feedback:
      'Highly recommend! Professional and friendly vets, excellent care.',
    rating: 4,
    img: 'https://i.ibb.co.com/Hf4rpnWF/9f80aaf4-f0ef-4e3f-8aa7-e0a8c75e37f5.jpg',
  },
  {
    id: 3,
    name: 'Jessica Lee',
    feedback:
      'Very happy with the service. My cat feels safe and happy every visit.',
    rating: 5,
    img: 'https://i.ibb.co.com/VpJYk6rM/Gemini-Generated-Image-dky7ghdky7ghdky7.png',
  },
  {
    id: 4,
    name: 'Daniel Brown',
    feedback:
      'Friendly staff and clean facilities. They really care about pets.',
    rating: 5,
    img: 'https://i.ibb.co.com/fYr0XcpK/Gemini-Generated-Image-622pq4622pq4622p.png',
  },
];

const TestimonialSlider = () => {
  return (
    <div className="pb-10 p-10 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-3xl mx-auto"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200 text-center flex flex-col items-center hover:scale-105 transform transition duration-300">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-400">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                {testimonial.name}
              </h3>
              <div className="flex mb-2">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-gray-700 italic">{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
