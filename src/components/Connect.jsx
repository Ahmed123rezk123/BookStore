import Image from "../assets/subscribe-image.png";

function Connect() {
  return (
    <section className="bg-[#faebd4aa] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h1 className="font-bold text-4xl sm:text-5xl leading-tight text-center sm:text-left">
            Join Book Lovers Community and Get Latest Updates
          </h1>

          <form className="flex flex-col sm:flex-row  items-center gap-4 mt-6">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#f7a72f] focus:outline-none"
            />
            <button
              type="submit"
              className="btn bg-[#f7a72f] hover:bg-[#f5b649] px-6 py-3 font-semibold  rounded whitespace-nowrap cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className="rounded">
          <img src={Image} alt="Subscribe" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Connect;
