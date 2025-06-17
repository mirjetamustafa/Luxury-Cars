import { RiCloseLargeFill } from 'react-icons/ri'
import { FiCalendar } from 'react-icons/fi'
import { RiSpeedUpLine } from 'react-icons/ri'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { FaRegStar } from 'react-icons/fa6'

const CarsDetails = ({ details, setDetails }) => {
  return (
    <div>
      {details && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center ">
          <div className="bg-white w-[90%] md:w-300 h-170  rounded-lg overflow-hidden relative overflow-y-scroll">
            <div className="h-[400px] overflow-hidden rounded-t-md">
              <img
                src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
              <button
                className="float-end text-xl absolute top-0 right-0 m-6 bg-white rounded-full p-2 cursor-pointer"
                onClick={() => setDetails(false)}
              >
                <RiCloseLargeFill />
              </button>
            </div>
            <div className="md:mx-9 mx-5">
              <div className="md:flex justify-between my-5">
                <div className="">
                  <h1 className="md:text-2xl text-3xl font-bold">
                    Porsche 911 Carrera
                  </h1>
                  <span className="text-gray-500">Sports</span>
                </div>
                <div className="max-md:mt-5 max-md:ml-60">
                  <h1 className="text-2xl font-bold ml-7">$106,100</h1>
                  <span className="text-gray-500 text-sm">
                    Lease from $1299/mo
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                <div className="bg-gray-50 rounded-lg shadow-xs p-5">
                  <p className="flex text-sm text-gray-500">
                    <FiCalendar className="mt-0.5 mr-1 text-lg" />
                    <span>Year</span>
                  </p>
                  <p className="font-bold">2023</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-xs p-5">
                  <p className="flex text-sm text-gray-500">
                    <RiSpeedUpLine className="mt-0.5 mr-1 text-lg" />
                    <span>Mileage</span>
                  </p>
                  <p className="font-bold">50 mi</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-xs p-5">
                  <p className="flex text-sm text-gray-500">Fuel Type</p>
                  <p className="font-bold">Gasoline</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-xs p-5">
                  <p className="flex text-sm text-gray-500">
                    <IoInformationCircleOutline className="mt-0.5 mr-1 text-lg" />
                    <span>Transmission</span>
                  </p>
                  <p className="font-bold">Automatic</p>
                </div>
              </div>

              <div className="my-7">
                <h1 className="text-lg font-semibold">Description</h1>
                <p className="mt-2 md:w-[91ch]">
                  The Porsche 911 Carrera is a true sports car with everyday
                  usability. With a twin-turbocharged flat-six engine, it
                  delivers exhilarating performance while maintaining the iconic
                  911 silhouette.
                </p>
              </div>

              <div className="my-7">
                <h1 className="text-lg font-semibold">Features</h1>
                <div className="md:flex justify-between max-md:space-y-2  mt-5">
                  <div className="space-y-2">
                    <p className="flex">
                      <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                      <span>Sport Chrono Package</span>
                    </p>
                    <p className="flex">
                      <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                      <span>10.9-inch touchscreene</span>
                    </p>
                    <p className="flex">
                      <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                      <span>Adaptive sport seats</span>
                    </p>
                  </div>

                  <div className="space-y-2 md:mr-70">
                    <p className="flex">
                      <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                      <span>Leather interior</span>
                    </p>
                    <p className="flex">
                      <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                      <span>Bose surround sound system</span>
                    </p>
                    <p className="flex">
                      <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                      <span>Sport exhaust system</span>
                    </p>
                  </div>
                </div>

                <div className="md:flex md:space-x-2 space-y-2 mt-9">
                  <div className="w-full">
                    <button className="bg-black text-white rounded-md w-full py-2 cursor-pointer hover:opacity-85">
                      Schedule Test Drive
                    </button>
                  </div>
                  <div className="w-full">
                    <button className="border border-gray-200 text-gray-800 rounded-md w-full py-2 cursor-pointer hover:bg-gray-50">
                      Request More Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarsDetails
