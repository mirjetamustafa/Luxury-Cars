import { RiCloseLargeFill } from 'react-icons/ri'
import { FiCalendar } from 'react-icons/fi'
import { RiSpeedUpLine } from 'react-icons/ri'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { FaRegStar } from 'react-icons/fa6'

const CarsDetails = ({ car, onClose }) => {
  return (
    <div>
      <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center ">
        <div className="bg-white w-[90%] md:w-300 h-170  rounded-lg overflow-hidden relative overflow-y-scroll">
          <div className="h-[400px] overflow-hidden rounded-t-md">
            <img
              src={car.img}
              alt={car.model}
              className="h-full w-full object-cover"
            />
            <button
              className="float-end text-xl absolute top-0 right-0 m-6 bg-white rounded-full p-2 cursor-pointer"
              onClick={onClose}
            >
              <RiCloseLargeFill />
            </button>
          </div>
          <div className="md:mx-9 mx-5">
            <div className="md:flex justify-between my-5">
              <div className="">
                <h1 className="md:text-2xl text-3xl font-bold">
                  {car.brand} {car.model}
                </h1>
                <span className="text-gray-500">{car.type}</span>
              </div>
              <div className="max-md:mt-5 max-md:ml-60">
                <h1 className="text-2xl font-bold ml-7">${car.price}</h1>
                <span className="text-gray-500 text-sm">
                  Lease from ${car.leasing}/mo
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
              <div className="bg-gray-50 rounded-lg shadow-xs p-5">
                <p className="flex text-sm text-gray-500">
                  <FiCalendar className="mt-0.5 mr-1 text-lg" />
                  <span>Year</span>
                </p>
                <p className="font-bold">{car.year}</p>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-xs p-5">
                <p className="flex text-sm text-gray-500">
                  <RiSpeedUpLine className="mt-0.5 mr-1 text-lg" />
                  <span>Mileage</span>
                </p>
                <p className="font-bold">{car.mileage} mi</p>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-xs p-5">
                <p className="flex text-sm text-gray-500">Fuel Type</p>
                <p className="font-bold">{car.fuelType}</p>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-xs p-5">
                <p className="flex text-sm text-gray-500">
                  <IoInformationCircleOutline className="mt-0.5 mr-1 text-lg" />
                  <span>Transmission</span>
                </p>
                <p className="font-bold">{car.transmission}</p>
              </div>
            </div>

            <div className="my-7">
              <h1 className="text-lg font-semibold">Description</h1>
              <p className="mt-2 md:w-[91ch]">{car.description}</p>
            </div>

            <div className="my-7">
              <h1 className="text-lg font-semibold">Features</h1>
              <div className="md:flex justify-between max-md:space-y-2  mt-5">
                <div className="space-y-2">
                  <p className="flex">
                    <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                    <span>{car.features1}</span>
                  </p>
                  <p className="flex">
                    <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                    <span>{car.features2}</span>
                  </p>
                  <p className="flex">
                    <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                    <span>{car.features3}</span>
                  </p>
                </div>

                <div className="space-y-2 md:mr-70">
                  <p className="flex">
                    <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                    <span>{car.features4}</span>
                  </p>
                  <p className="flex">
                    <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                    <span>{car.features5}</span>
                  </p>
                  <p className="flex">
                    <FaRegStar className="text-yellow-500 mt-1 mr-1" />
                    <span>{car.features6}</span>
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
    </div>
  )
}

export default CarsDetails
