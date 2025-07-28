import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./Pages/BookDetails/BookDetails";
import HomePage from "./Pages/HomePage/HomePage";
import BookList from "./Pages/BookList/BookList";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/Footer";
import Connect from "./components/Connect";

function App() {
  return (
    <>
      <div className="shadow-sm">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
      <Connect />
      <Footer />
    </>
  );
}

export default App;
