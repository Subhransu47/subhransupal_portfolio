import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: 'Master of Computer Applications (MCA)',
      institution: 'GIFT Autonomous, Bhubaneswar',
      grades: 'CGPA: 8.13',
      year: ' [2024–Present]',
      desc: "I am currently pursuing a Master’s degree in Computer Applications (MCA) at GIFT Autonomous, Bhubaneswar. I have completed 3 semesters and have a CGPA of 8.13.",
    },
    // {
    //   logo: "logo-play",
    //   degree: 'GSEB(XII)-HSC',
    //   institution: 'Bhaktashram Ashramshala, Navsari',
    //   grades: 'Grade: 70.1% ',
    //   year: ' [2020-2021]',
    //   desc: "I completed my class 12 high school education at Bhaktashram Ashramshala, Navsari, where I studied Science with PCM.",       
    // },
  ];

  return (
    <div className="container mx-auto px-4 py-12" id='education'>
      <h3 className="text-4xl text-center font-semibold mb-1">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg text-center font-normal ">My educational details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-200">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-200">{edu.institution}</div>
              <div className="text-base text-gray-200">{edu.grades}</div>
              <div className="text-base text-gray-200">{edu.year}</div>
            </div>
            <p className="text-gray-200">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
