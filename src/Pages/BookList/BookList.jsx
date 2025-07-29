import { HiShoppingCart } from "react-icons/hi2";
import { booksData } from "../../data/books";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

function BookList() {
  const { addToCart } = useCart();
  return (
    <div className="bg-gray-100 pb-20 pt-[150px] ">
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="section-title text-2xl text-[#f7a72f]">
          📚 Featured Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {booksData.map((book) => (
            <div
              key={book.id}
              className="relative group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover cursor-pointer"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500">by {book.author}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-[#ffc46b] font-bold">
                    ${book.price}
                  </span>
                  <Link to={`/books/${book.id}`} key={book.id}>
                    <button className="text-[#ffc46b] cursor-pointer">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => addToCart(book)}
                  className="bg-[#ffc46b] text-white p-2 rounded-full shadow hover:bg-[#fcead0] hover:text-[#f7a72f] cursor-pointer"
                >
                  <HiShoppingCart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BookList;
