import { Link, useParams } from "react-router-dom";
import { booksData } from "../../data/books";
import { useCart } from "../../hooks/useCart";

function BookDetails() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) return <p className="text-center text-red-500">Book not found</p>;

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pb-20 pt-[150px]">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-[400px] object-contain rounded"
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
        <p className="text-gray-600 text-sm mb-2">By {book.author}</p>
        <p className="text-xl text-[#ffc46b] font-bold mb-4">${book.price}</p>
        <button
          onClick={() => addToCart(book)}
          className="inline-block bg-[#ffc46b] hover:bg-[#fbbf24] text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
