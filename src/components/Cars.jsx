import React, { useState } from 'react'
import carsData from '../carsData.json'
import { RiSpeedUpLine } from 'react-icons/ri'

import CarsDetails from './CarsDetails'

const Cars = () => {
  const [category, setCategory] = useState('all')
  const [details, setDetails] = useState(null)

  const categories = ['all', ...new Set(carsData.map((car) => car.type))]

  const visibleCars =
    category === 'all'
      ? carsData
      : carsData.filter((car) => car.type === category)

  return (
    <section className="m-10 relative">
      <h1 className="text-2xl font-bold">Filter By Category</h1>
      <div className="flex my-5 gap-2">
        {categories.map((type) => (
          <button
            key={type}
            onClick={() => setCategory(type)}
            className={`rounded-full shadow-xs px-3 py-2 cursor-pointer font-semibold text-sm ${
              category === type
                ? 'bg-black text-white'
                : 'bg-white text-gray-500 hover:bg-gray-100'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-2 ">
        {visibleCars.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-md rounded-md overflow-hidden w-full max-w-sm my-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1.5 hover:scale-100 cursor-pointer"
          >
            <div className="h-42 overflow-hidden">
              <img
                src={car.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex justify-between mx-9 my-5">
              <div className="">
                <h1 className="text-xl font-bold">{car.model}</h1>
                <span className="text-gray-500">{car.brand}</span>
              </div>
              <div className="">
                <h1 className="text-xl font-bold">${car.price}</h1>
                <span className="text-gray-500">${car.leasing}/mo</span>
              </div>
            </div>
            <div className="flex mt-9 mx-20 gap-8">
              <p className="text-sm text-gray-700">{car.fuelType}</p>
              <p className="flex text-sm text-gray-700">
                <RiSpeedUpLine className="mt-0.5 mr-1 text-lg" /> {car.mileage}
              </p>
              <p className="text-sm text-gray-700">{car.transmission}</p>
            </div>
            <button
              onClick={() => setDetails(car)}
              className="bg-black w-87 text-white rounded-md py-3 mx-5 my-5 cursor-pointer hover:opacity-85"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {details && details.brand && (
        <CarsDetails car={details} onClose={() => setDetails(null)} />
      )}
    </section>
  )
}

export default Cars
