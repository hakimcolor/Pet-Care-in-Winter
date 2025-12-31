import React from 'react';


const tipsData = [
  {
    id: 1,
    title: 'Keep Your Pets Warm Indoors',
    description:
      'Provide a warm and cozy space for your pets to rest during cold winter months. Use blankets, pet beds, or heated pads. Make sure their sleeping area is away from drafts and cold floors. This helps maintain their body temperature and keeps them healthy.',
  },
  {
    id: 2,
    title: 'Protect Paws from Ice',
    description:
      "Use pet-safe booties or paw balm to protect your pets' paws from ice, salt, and cold surfaces. After walks, check and clean their paws to remove any harmful substances and prevent cracking.",
  },
  {
    id: 3,
    title: 'Adjust Food and Water Intake',
    description:
      'Ensure your pets have enough food and fresh water. Cold weather may increase their energy needs. Wet water can freeze, so check their water bowl frequently and keep it filled with fresh, unfrozen water.',
  },
  {
    id: 4,
    title: 'Limit Outdoor Time',
    description:
      'Reduce outdoor walks during extremely cold weather. Short, frequent walks are better than long exposure. Monitor your pets for signs of cold stress like shivering, and never leave them outside unattended for long periods.',
  },
  {
    id: 5,
    title: 'Regular Grooming',
    description:
      'Brush your pet regularly to prevent matting. Grooming helps maintain healthy fur and removes dirt, snow, and debris that may accumulate during winter. Clean their paws and fur after coming indoors to avoid irritation.',
  },
  {
    id: 6,
    title: 'Monitor Health Closely',
    description:
      'Watch for signs of cold stress, such as shivering, lethargy, or frostbite. Older pets and young animals are more vulnerable. Consult a vet if you notice unusual behavior or symptoms during cold weather.',
  },
];

const WinterTips = () => {
  return (
    <div className=" text-gray-800 py-16 px-5 min-h-screen pt-10xl:pb-0">
      <h2 className="text-4xl font-bold text-center mb-12">
        Winter Care Tips for Pets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {tipsData.map((tip) => (
          <div
            key={tip.id}
            className="bg-white p-6 rounded-2xl shadow-lg border border-blue-300 hover:shadow-xl transition duration-300 flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-800">
              {tip.title}
            </h3>
            <p className="text-gray-700 flex-1">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterTips;
