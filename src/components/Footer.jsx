import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandFacebook } from 'react-icons/tb'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-[#111827] w-full">
      <div className="grid md:grid-cols-4 grid-cols-1 p-5">
        <div className="p-5">
          <h1 className="text-xl font-bold text-white">LuxuryCars</h1>
          <p className="text-gray-400 pt-3 w-[29ch]">
            Experience the finest selection of premium vehicles with exceptional
            service.
          </p>
          <ul className="pt-7 flex space-x-3">
            <Link className="text-gray-400 hover:text-white">
              <TbBrandFacebook size={22} />
            </Link>
            <Link className="text-gray-400 hover:text-white">
              <FaXTwitter size={20} />
            </Link>
            <Link className="text-gray-400 hover:text-white">
              <FaInstagram size={22} />
            </Link>
            <Link className="text-gray-400 hover:text-white ">
              <AiOutlineYoutube size={25} />
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-bold text-white">Quick Links</h1>
          <ul className="pt-3 space-y-3">
            <li>
              <Link className="text-gray-400 hover:text-white">Home</Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white">Inventory</Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white">Services</Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white">Financing</Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white">About Us</Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-bold text-white">Services</h1>
          <ul className="pt-3 space-y-3">
            <li>
              <Link className="text-gray-400 hover:text-white">
                New Vehicles
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white">
                Pre-Owned Vehicles
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white">
                Financing Options
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white">
                Vehicle Service
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white">
                Parts & Accessories
              </Link>
            </li>
            <li>
              <Link className="text-gray-400 hover:text-white">
                Trade-In Appraisal
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="text-xl font-bold text-white">Contact</h1>
          <p className="flex pt-3 text-gray-400">
            <GrLocation className="mt-1 mr-1" />
            <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
          </p>
          <p className="flex pt-3 text-gray-400">
            <FiPhone className="mt-1 mr-1" />
            <span>(123) 456-7890</span>
          </p>
          <p className="flex pt-3 text-gray-400">
            <FaRegEnvelope className="mt-1 mr-1" />
            <span>info@luxurycars.com</span>
          </p>

          <h1 className="text-md text-white font-semibold mt-9">
            Business Hours
          </h1>
          <div className="space-y-3 mt-3">
            <p className="text-sm text-gray-400">
              Mon - Fri: 9:00 AM - 8:00 PM
            </p>
            <p className="text-sm text-gray-400">Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm text-gray-400">Sunday: 11:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="border-t border-gray-800 w-full h-1"></div>
        <p className="text-center text-gray-400 mt-7 text-sm">
          © 2025 LuxuryCars. All rights reserved.
        </p>
        <ul className="mt-2 space-x-3 flex justify-center">
          <li className="text-gray-400 hover:text-white">
            <Link>Privacy Policy</Link>
          </li>
          <li className="text-gray-400 hover:text-white">
            <Link>Terms of Service</Link>
          </li>
          <li className="text-gray-400 hover:text-white">
            <Link>Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
