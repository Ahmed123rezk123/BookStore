import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo.jpg";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-[#000] text-[#fff] border-t border-[#f7a72f] ">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="text-2xl font-bold flex items-center">
            <img
              src={Logo}
              alt="Bookstore Logo"
              className="h-12 w-12 mr-2 sm:h-16 sm:w-16"
            />
            Bookstore
          </Link>
          <p className="text-sm leading-relaxed mt-5">
            Discover the best books from your favorite authors. Join our
            community of readers and stay inspired!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#f7a72f]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" className="hover:text-[#f7a72f]">
                Books
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#f7a72f]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#f7a72f]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm ">
            {" "}
            <IoLocation className="font-bold text-[#f7a72f] text-3xl " /> New
            York, NY 10028
          </p>
          <p className="text-sm">
            {" "}
            <IoCall className="font-bold text-[#f7a72f] text-3xl" /> +39 123 456
            7890
          </p>
          <p className="text-sm ">
            <IoMail className="font-bold text-[#f7a72f] text-xl text-center " />
            info@example.com
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-[#f7a72f] hover:text-[#fff] ">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-[#f7a72f] hover:text-[#fff]">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-[#f7a72f] hover:text-[#fff]">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-[#f7a72f] hover:text-[#fff]">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-sm border-t border-gray-300">
        © {new Date().getFullYear()}
        <span className="font-medium">Bookstore</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
