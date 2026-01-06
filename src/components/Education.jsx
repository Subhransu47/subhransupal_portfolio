import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Bhgawan Mahavir University, Surat',
      grades: 'CGPA: 7.58',
      year: ' [2021-present]',
      desc: "I am currently pursuing a Bachelor's degree in Infromation technology at Bhgawan Mahavir University, Surat, Gujarat. I have completed 5 semesters and have a CGPA of 7.58.",
    },
    {
      logo: "logo-play",
      degree: 'GSEB(XII)-HSC',
      institution: 'Bhaktashram Ashramshala, Navsari',
      grades: 'Grade: 70.1% ',
      year: ' [2020-2021]',
      desc: "I completed my class 12 high school education at Bhaktashram Ashramshala, Navsari, where I studied Science with PCM.",       
    },
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
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
