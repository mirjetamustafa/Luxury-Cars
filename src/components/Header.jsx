import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'

const Header = () => {
  const [burgerBtn, setBurgerBtn] = useState('false')
  return (
    <header className="p-5 bg-white shadow-sm sticky z-40 top-0">
      <nav className="flex justify-between">
        <h3 className="text-xl font-bold mt-2">LuxuryCars</h3>
        {/* Mobile */}
        <div className="md:hidden">
          {!burgerBtn ? (
            <button
              onClick={() => setBurgerBtn(true)}
              className="cursor-pointer hover:bg-gray-200 p-2 rounded-md"
            >
              <GiHamburgerMenu className="text-gray-400" size={25} />
            </button>
          ) : (
            <button
              onClick={() => setBurgerBtn(false)}
              className="cursor-pointer hover:bg-gray-200 p-2 rounded-md"
            >
              <IoCloseSharp className="text-gray-400" size={25} />
            </button>
          )}

          {burgerBtn && (
            <div className="w-full bg-white h-100 fixed top-18 z-50 left-0 transition delay-150 duration-300 ease-in-out">
              <div className="">
                <ul className="flex flex-col font-bold space-y-4 mt-2">
                  <Link
                    to={'/'}
                    className="text-gray-900 hover:bg-gray-200 mx-5 py-1 px-2 rounded-md"
                  >
                    Home
                  </Link>
                  <Link
                    to={'/'}
                    className="text-gray-900 hover:hover:bg-gray-200 mx-5 py-1 px-2 rounded-md"
                  >
                    Inventory
                  </Link>
                  <Link
                    to={'/'}
                    className="text-gray-900 hover:hover:bg-gray-200 mx-5 py-1 px-2 rounded-md"
                  >
                    Services
                  </Link>
                  <Link
                    to={'/'}
                    className="text-gray-900 hover:hover:bg-gray-200 mx-5 py-1 px-2 rounded-md"
                  >
                    About
                  </Link>
                  <Link
                    to={'/'}
                    className="text-gray-900 hover:hover:bg-gray-200 mx-5 py-1 px-2 rounded-md"
                  >
                    Contact
                  </Link>
                </ul>
                <form action="" className="mx-5 mt-5">
                  <FaSearch
                    className="absolute text-gray-400 px-2 mt-1"
                    size={35}
                  />
                  <input
                    type="text"
                    className="relative w-full outline outline-gray-300 rounded-full py-2 px-9 focus:outline-gray-500 focus:outline-2 transition duration-200 ease-in-out "
                    placeholder="Search cars..."
                  />
                </form>
              </div>
            </div>
          )}
        </div>
        {/* End Mobile */}
        <div className="flex max-md:hidden">
          <ul className="font-bold space-x-6 mt-2">
            <Link to={'/'} className="text-gray-900 hover:text-gray-600">
              Home
            </Link>
            <Link to={'/'} className="text-gray-900 hover:text-gray-600">
              Inventory
            </Link>
            <Link to={'/'} className="text-gray-900 hover:text-gray-600">
              Services
            </Link>
            <Link to={'/'} className="text-gray-900 hover:text-gray-600">
              About
            </Link>
            <Link to={'/'} className="text-gray-900 hover:text-gray-600">
              Contact
            </Link>
          </ul>
          <form action="" className="mx-5">
            <FaSearch className="absolute text-gray-400 px-2 mt-1" size={35} />
            <input
              type="text"
              className="relative outline outline-gray-300 rounded-full py-2 px-9 focus:outline-gray-500 focus:outline-2 transition duration-200 ease-in-out "
              placeholder="Search cars..."
            />
          </form>
        </div>
      </nav>
    </header>
  )
}

export default Header
