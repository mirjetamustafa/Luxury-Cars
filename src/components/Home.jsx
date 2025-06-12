import car from '../assets/bgCar.png'

const Home = () => {
  return (
    <main>
      <section>
        <div className="relative bg-gray-900 md:h-[90vh] h-[80vh]">
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

          <div className="relative grid md:grid-cols-2 h-110 content-center z-10">
            <div className="md:px-9 px-5">
              <h1 className="md:text-7xl text-6xl text-white font-bold">
                Experience Luxury Driving
              </h1>
              <p className="text-white text-2xl mt-9 md:w-[55ch]">
                Discover our premium selection of high-performance vehicles for
                an unparalleled driving experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
