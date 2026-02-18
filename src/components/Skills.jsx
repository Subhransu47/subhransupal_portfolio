import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiFirebase,
  SiNodedotjs,
} from "react-icons/si";



const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: <SiHtml5 />,
      level: "Intermediate",
      count: 70,
    },
    {
      name: "CSS",
      logo: <SiCss3 />,
      level: "Intermediate",
      count: 70,
    },
    {
      name: "JAVASCRIPT",
      logo: <SiJavascript />,
      level: "Intermediate",
      count: 70,
    },
    {
      name: "REACT",
      logo: <SiReact />,
      level: "Intermediate",
      count: 60,
    },
    {
      name: "MONGO DB",
      logo: <SiMongodb />,
      level: "Beginner",
      count: 50,
    },

    // {
    //   name: "FIREBASE",
    //   logo: <SiFirebase />,
    //   level: "Beginner",
    //   count: 40,
    // },
    {
      name: "NODE JS",
      logo: <SiNodedotjs />,
      level: "Beginner",
      count: 40,
    }
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-8 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-4 rounded-xl"
            >
              <p className="text-xl mb-2">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >

                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.logo}
                </div>

              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;