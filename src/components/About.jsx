import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "03" },
    { text: "Companies Work", count: "01" }
  ];

 
  const googleDriveLink = "https://drive.google.com/drive/u/0/folders/1KkTj89-j1wxzwT-ZYfrmEpHHGDXr-0gp";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am currently pursuing my Master of Computer Applications (MCA) at GIFT Autonomous College, Bhubaneswar, with a strong focus on full-stack web development. As a MERN Stack Developer, I specialize in building scalable, high-performance web applications using modern technologies.
                <br />With hands-on experience in crafting responsive and intuitive user interfaces, I bring a balanced blend of creativity and technical expertise. My development journey has equipped me with solid proficiency in MongoDB, Express.js, React.js, and Node.js, enabling me to work confidently across both frontend and backend layers
                <br />
                Beyond the MERN stack, I am skilled in JavaScript, TypeScript, Tailwind CSS, Bootstrap, Firebase, and Git/GitHub, allowing me to adapt seamlessly to diverse project requirements. I am deeply focused on delivering exceptional user experiences through clean, maintainable code, optimized performance, and visually engaging UI components.
                <br /> Driven by continuous learning and innovation, I strive to build impactful digital solutions that are both user-centric and scalable.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
