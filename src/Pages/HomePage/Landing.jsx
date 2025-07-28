function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to
        <span className="text-[#ffc46b]"> Bookstore</span>
      </h1>
      <p className="text-lg mb-4">
        Your one-stop shop for all your reading needs!
      </p>
      <div className="flex space-x-4">
        <a
          href="/books"
          className="px-4 py-2 bg-[#ffc46b] text-white rounded hover:bg-[#f8b44e]"
        >
          Browse Books
        </a>
      </div>
    </div>
  );
}

export default Landing;
