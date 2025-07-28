import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { HiShoppingBag } from "react-icons/hi2";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();
  return (
    <nav className="p-2 mx-6 inset-shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img
            src={Logo}
            alt="Bookstore Logo"
            className="h-12 w-12 mr-2 sm:h-16 sm:w-16"
          />
          Bookstore
        </Link>

        <div className="hidden md:flex space-x-6 text-2xl">
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

        <div>
          <Link to="/cart" className="hover:text-[#ffc46b]">
            <HiShoppingBag className="text-3xl" />
            {cartCount > -1 && (
              <span className="absolute top-5 right-5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
