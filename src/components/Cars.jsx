import React, { useState } from 'react'
import carsData from '../carsData.json'

const Cars = () => {
  const [category, setCategory] = useState('all')
  return (
    <section className="m-10">
      <h1 className="text-2xl font-bold">Filter By Category</h1>
      <div className="flex my-5 gap-2">
        <button
          onClick={() => setCategory('all')}
          className={`rounded-full shadow-xs px-3 py-2 cursor-pointer ${
            category === 'all'
              ? 'bg-black text-white'
              : 'bg-white text-gray-500 hover:bg-gray-100'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setCategory('sedan')}
          className={`rounded-full shadow-xs px-3 py-2 cursor-pointer ${
            category === 'sedan'
              ? 'bg-black text-white'
              : 'bg-white text-gray-500 hover:bg-gray-100'
          }`}
        >
          Sedan
        </button>
        <button
          onClick={() => setCategory('suv')}
          className={`rounded-full shadow-xs px-3 py-2 cursor-pointer ${
            category === 'suv'
              ? 'bg-black text-white'
              : 'bg-white text-gray-500 hover:bg-gray-100'
          }`}
        >
          Suv
        </button>
        <button
          onClick={() => setCategory('sports')}
          className={`rounded-full shadow-xs px-3 py-2 cursor-pointer ${
            category === 'sports'
              ? 'bg-black text-white'
              : 'bg-white text-gray-500 hover:bg-gray-100'
          }`}
        >
          Sports
        </button>
        <button
          onClick={() => setCategory('electric')}
          className={`rounded-full shadow-xs px-3 py-2  cursor-pointer ${
            category === 'electric'
              ? 'bg-black text-white'
              : 'bg-white text-gray-500 hover:bg-gray-100'
          }`}
        >
          Electric
        </button>
        <button
          onClick={() => setCategory('luxury')}
          className={`rounded-full shadow-xs px-3 py-2  cursor-pointer ${
            category === 'luxury'
              ? 'bg-black text-white'
              : 'bg-white text-gray-500 hover:bg-gray-100'
          }`}
        >
          Luxury
        </button>
      </div>
      {category === 'all' ? (
        <div className="grid md:grid-cols-3 gap-2">
          <div className="bg-white shadow-md rounded-md overflow-hidden w-full max-w-sm">
            <div className="h-42 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="bg-blue-400 h-20 w-full"></div>
          <div className="bg-blue-400 h-20 w-full"></div>
          <div className="bg-blue-400 h-20 w-full"></div>
          <div className="bg-blue-400 h-20 w-full"></div>
        </div>
      ) : category === 'sedan' ? (
        <div className="grid md:grid-cols-3 gap-2">
          <div className="bg-red-400 h-20 w-full"></div>
          <div className="bg-red-400 h-20 w-full"></div>
          <div className="bg-red-400 h-20 w-full"></div>
          <div className="bg-red-400 h-20 w-full"></div>
          <div className="bg-red-400 h-20 w-full"></div>
        </div>
      ) : category === 'suv' ? (
        <div className="grid md:grid-cols-3 gap-2">
          <div className="bg-purple-400 h-20 w-full"></div>
          <div className="bg-purple-400 h-20 w-full"></div>
          <div className="bg-purple-400 h-20 w-full"></div>
          <div className="bg-purple-400 h-20 w-full"></div>
          <div className="bg-purple-400 h-20 w-full"></div>
        </div>
      ) : category === 'sports' ? (
        <div className="grid md:grid-cols-3 gap-2">
          <div className="bg-yellow-400 h-20 w-full"></div>
          <div className="bg-yellow-400 h-20 w-full"></div>
          <div className="bg-yellow-400 h-20 w-full"></div>
          <div className="bg-yellow-400 h-20 w-full"></div>
          <div className="bg-yellow-400 h-20 w-full"></div>
        </div>
      ) : category === 'electric' ? (
        <div className="grid md:grid-cols-3 gap-2">
          <div className="bg-green-400 h-20 w-full"></div>
          <div className="bg-green-400 h-20 w-full"></div>
          <div className="bg-green-400 h-20 w-full"></div>
          <div className="bg-green-400 h-20 w-full"></div>
          <div className="bg-green-400 h-20 w-full"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-2">
          <div className="bg-zinc-400 h-20 w-full"></div>
          <div className="bg-zinc-400 h-20 w-full"></div>
          <div className="bg-zinc-400 h-20 w-full"></div>
          <div className="bg-zinc-400 h-20 w-full"></div>
          <div className="bg-zinc-400 h-20 w-full"></div>
        </div>
      )}
    </section>
  )
}

export default Cars
