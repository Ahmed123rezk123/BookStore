import React from "react";
// import Auther1 from "../../assets/author-image02.jpg";
// import Auther2 from "../../assets/author-image04.jpg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import Ahmed from "../../assets/Ahmed.jpg";
function About() {
  return (
    <div>
      <div className="bg-[#faebd4aa] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title font-bold  text-5xl">About Us</h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Natoque euismod a hic porta. Auctor, consequatur occaecati magna
            natus pretium ornare penatibus. Tempor viverra, erat veritatis.
          </p>
        </div>
      </div>
      <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-[#f7a72f] mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            We're passionate about books and connecting with our community. Meet
            our authors and follow us online.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src={Ahmed}
              alt="Our Authors"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div className="space-y-6 text-left md:text-center">
              <h2 className="text-2xl font-bold text-gray-800">👩‍💻 Our Team</h2>
              <ul className="text-gray-700 space-y-1 text-lg">
                <li>Ahmed Atef – Frontend Developer</li>
                <li>Mohamed Hussian – Backend Developer</li>
                <li>Kareem Samy – Content Writer</li>
                <li>Hassan Galal – Book Curator</li>
              </ul>

              <div className="flex justify-center space-x-4 pt-4">
                <a href="#" className="text-[#f7a72f] hover:text-[#ffd79bf8]">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-[#f7a72f] hover:text-[#ffd79bf8]">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-[#f7a72f] hover:text-[#ffd79bf8]">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-[#f7a72f] hover:text-[#faebd4aa]">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
