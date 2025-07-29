import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { HiShoppingBag, HiOutlineMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { useCart } from "../hooks/useCart";

function Navbar() {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md h-20 px-4">
      <div className="container mx-auto flex items-center h-full">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img
            src={Logo}
            alt="Bookstore Logo"
            className="h-12 w-12 mr-2 sm:h-16 sm:w-16"
          />
          Bookstore
        </Link>

        <div className="hidden  md:flex space-x-6 text-2xl ml-auto">
          <Link to="/" className="hover:text-[#ffc46b]">
            Home
          </Link>
          <Link to="/books" className="hover:text-[#ffc46b]">
            Books
          </Link>
          <Link to="/about" className="hover:text-[#ffc46b]">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#ffc46b]">
            Contact
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-6">
          <Link to="/cart" className="relative hover:text-[#ffc46b]">
            <HiShoppingBag className="text-3xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <HiX className="text-3xl" />
              ) : (
                <HiOutlineMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 text-xl z-40">
          <Link to="/" onClick={toggleMenu} className="hover:text-[#ffc46b]">
            Home
          </Link>
          <Link
            to="/books"
            onClick={toggleMenu}
            className="hover:text-[#ffc46b]"
          >
            Books
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="hover:text-[#ffc46b]"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="hover:text-[#ffc46b]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
