import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const contact_info = [
    { logo: "mail", text: "subhransupal123@gmail.com" },
    { logo: "call-outline", text: "+91 7609063171" },
    { logo: "location", text: "Bhubaneswar-751012, Odisha, India" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_shk17yi",   // 🔴 replace
        "template_bsjzre4",  // 🔴 replace
        form.current,
        "-gBu4X91Y7CJh3GHu"    // 🔴 replace
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          
          {/* 🔹 FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="bg-gray-700 p-3 rounded outline-none"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email Address"
              required
              className="bg-gray-700 p-3 rounded outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              required
              className="bg-gray-700 p-3 rounded outline-none"
            ></textarea>

            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>

          {/* 🔹 CONTACT INFO */}
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex text-left gap-4 items-center"
              >
                <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-3xl bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
