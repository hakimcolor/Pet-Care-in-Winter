import React from 'react';


const vetsData = [
  {
    id: 1,
    name: 'Dr. Sarah Thompson',
    specialty: 'Small Animals Specialist',
    experience: '10 years of experience in caring for cats and dogs.',
    img: 'https://i.ibb.co.com/jv0b3Grp/Gemini-Generated-Image-vcqfzvvcqfzvvcqf.png',
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    specialty: 'Exotic Pets Expert',
    experience:
      '8 years of experience with birds, reptiles, and exotic mammals.',
    img: 'https://i.ibb.co.com/DPt419Rh/Gemini-Generated-Image-gqm8s8gqm8s8gqm8.png',
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    specialty: 'Surgery & Emergency Care',
    experience:
      '12 years of experience in veterinary surgery and emergency treatments.',
    img: 'https://i.ibb.co.com/ns3n23fW/Gemini-Generated-Image-in7iptin7iptin7i.png',
  },
  {
    id: 4,
    name: 'Dr. Michael Brown',
    specialty: 'Nutrition & Preventive Care',
    experience:
      '9 years helping pets stay healthy with proper diet and preventive check-ups.',
    img: 'https://i.ibb.co.com/w3XJq2k/2bdb43bc-a937-41d8-803a-1076d68cb8e2.jpg',
  },
];

const ExpertVets = () => {
  return (
    <div className="xl:mt-[-222px] px-10 mb-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Meet Our Expert Vets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {vetsData.map((vet) => (
          <div
            key={vet.id}
            className="bg-gradient-to-tr from-blue-50 via-blue-100 to-white p-6 rounded-2xl shadow-lg border border-blue-200 hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-400">
              <img
                src={vet.img}
                alt={vet.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-gray-800">
              {vet.name}
            </h3>
            <p className="text-blue-700 italic mb-2 font-medium">
              {vet.specialty}
            </p>
            <p className="text-gray-700 text-sm">{vet.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertVets;
