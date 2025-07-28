import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
function Contact() {
  return (
    <>
      <div className="bg-[#faebd4aa] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title font-bold  text-5xl"> Contact Us</h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Natoque euismod a hic porta. Auctor, consequatur occaecati magna
            natus pretium ornare penatibus. Tempor viverra, erat veritatis.
          </p>
        </div>
      </div>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title text-left font-bold text-3xl">
              Get In Touch
            </h2>

            <div className="mt-6 space-y-4 text-gray-700 text-base">
              <div>
                <h4 className="font-bold">
                  <IoLocation className="font-bold text-[#f7a72f] text-3xl" />
                  Our Location
                </h4>
                <p>1569 2nd Ave, New York, NY 10028, USA</p>
              </div>

              <div>
                <h4 className="font-bold">
                  {" "}
                  <IoCall className="font-bold text-[#f7a72f] text-3xl" /> Call
                  Us
                </h4>
                <p>+39 123 456 7890</p>
              </div>

              <div>
                <h4 className="font-bold">
                  {" "}
                  <IoMail className="font-bold text-[#f7a72f] text-3xl" /> Email
                </h4>
                <p>info@example.com</p>
              </div>

              <div>
                <h4 className="font-bold text-2xl">Follow Us</h4>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-[#f7a72f] text-3xl ">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-[#f7a72f] text-3xl">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-[#f7a72f] text-3xl">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-[#f7a72f] text-3xl">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-5  rounded">
            <h2 className="section-title text-left  font-bold text-3xl">
              Send a Message
            </h2>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded border border-gray-300  "
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded border border-gray-300  "
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded border border-gray-300  "
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-3 rounded border border-gray-300  "
              ></textarea>
              <button
                type="submit"
                className="btn bg-[#f7a72f] hover:bg-[#f5b649] px-5 py-2 text-white font-semibold cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
