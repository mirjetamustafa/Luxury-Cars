import { IoIosArrowForward } from 'react-icons/io'

const Home = () => {
  return (
    <main>
      <section>
        <div className="relative bg-gray-900 h-[80vh]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
              backgroundPosition: 'center 55%',
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative grid md:grid-cols-2 h-140 content-center z-10">
            <div className="md:px-9 px-5">
              <h1 className="md:text-7xl text-6xl text-white font-bold">
                Experience Luxury Driving
              </h1>
              <p className="text-white text-2xl mt-9 md:w-[55ch]">
                Discover our premium selection of high-performance vehicles for
                an unparalleled driving experience.
              </p>

              <div className="flex max-md:flex-col max-md:justify-center mt-9 ">
                <button className="flex bg-white text-gray-900 font-bold rounded-md cursor-pointer md:px-4 py-3 hover:opacity-90 max-md:pl-30">
                  Browse Inventory
                  <IoIosArrowForward className="mt-1.5 ml-2" />
                </button>
                <button className="flex bg-transparent border border-white text-white font-bold rounded-md cursor-pointer md:px-4 py-3 md:ml-4 hover:bg-linear-to-b hover:from-white/40 hover:to-white/15 transition duration-700 ease-in-out max-md:mt-9 max-md:pl-30">
                  Book Test Drive
                </button>
              </div>
            </div>
            <div className="flex justify-end content-end mt-100 mx-9 max-md:hidden">
              <div className="flex bg-white rounded-md p-3 w-70">
                <p className="flex flex-col text-gray-500 text-sm mr-2">
                  0-60 mph
                  <span className="text-lg font-bold text-gray-900 text-center">
                    3.2s
                  </span>
                </p>
                <p className="flex flex-col text-gray-500 text-sm mx-2">
                  Top Speed
                  <span className="text-lg font-bold text-gray-900 text-center">
                    205 mph
                  </span>
                </p>
                <p className="flex flex-col text-gray-500 text-sm ml-2">
                  Horsepower
                  <span className="text-lg font-bold text-gray-900 text-center">
                    573 hp
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
