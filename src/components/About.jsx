import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
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
              I am currently pursuing b.tech in IT, As a Developer specializing in web development With hands-on experience in crafting dynamic user interfaces, I bring a blend of creativity and technical expertise to my role.
                <br />Having secured an internship as a Frontend Developer at a reputable company, I've dived headfirst into Angular development, harnessing the power of Bootstrap for responsive and visually appealing designs. Additionally, my journey has acquainted me with Node.js, empowering me to contribute to server-side functionalities as well.
                <br />
                Beyond Angular, I possess a versatile skill set. I am proficient in javascript, TypeScript, React.js, Bootstrap, Firebase, and GitHub, ensuring that I am well-equipped to adapt to diverse project requirements.
                <br /> My focus lies in delivering exceptional user experiences through intuitive and scalable UI components.I have honed my skills in crafting impressive user interfaces, ensuring seamless navigation and optimal performance across devices.
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
