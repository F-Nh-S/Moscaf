import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../Assets/Logo.png"


const Footer = () => {
  return (
    <div className=' h-fit bg-gray-800 flex flex-col items-center justify-center text-center gap-1' id='contact'>
      <div className='h-full w-3/4'>
        <div className='item-start justify-center md:justify-start flex'>
          <img className='md:h-24 h-20 w-auto m-5' src={Logo} />
        </div>

        <div className='md:m-3 flex md:flex-row flex-col md:items-start md:justify-start items-center gap-5 '>

          <div className='flex gap-5 font-normal sm:text-md text-xs'>
            <a href='/'><p className=' text-gray-200 hover:text-red-700'>Home</p></a>
            <a href='/about'><p className=' text-gray-200 hover:text-red-700'>About</p></a>
            <a href='/services'><p className=' text-gray-200 hover:text-red-700'>Services</p></a>
            <a href='/gallery'><p className=' text-gray-200 hover:text-red-700'>Gallery</p></a>
            <a href='/contact'><p className=' text-gray-200 hover:text-red-700'>Contact</p></a>
          </div>

          <div className='md:absolute md:right-48'>
            <div className='flex  gap-5 items-start'>
              <a href='http://www.facebook.com/'><button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="md:h-6 md:w-6 h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button></a>

              <a href="http://www.instagram.com/" className='hover:text-gray-200'><button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="md:h-6 md:w-6 h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button></a>

              <a href="http://www.twitter.com/">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="md:h-6 md:w-6 h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 512 512">
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                  </svg>
                </button>
              </a>

              <a href="https://www.whatsapp.com/">
                <button>
                  <svg
                    class="md:h-6 md:w-6 h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path d="M30.19.031a31.753 31.753 0 0 0-26.735 46.12L.085 62.509A1.235 1.235 0 0 0 1.58 63.96l16.029-3.8A31.744 31.744 0 1 0 30.19.031zM49.316 49.31A24.871 24.871 0 0 1 20.68 54l-2.232-1.112-9.828 2.326 2.069-10.042-1.1-2.154a24.874 24.874 0 0 1 4.578-28.857A24.854 24.854 0 0 1 49.316 49.31zm0 0" />
                    <path d="M47.147 38.619L41 36.854a2.292 2.292 0 0 0-2.267.6l-1.5 1.531a2.239 2.239 0 0 1-2.435.514C31.883 38.32 25.765 32.88 24.2 30.16a2.239 2.239 0 0 1 .177-2.483l1.312-1.7a2.292 2.292 0 0 0 .283-2.328L23.388 17.8a2.293 2.293 0 0 0-3.58-.82c-1.716 1.451-3.752 3.657-4 6.1-.436 4.308 1.411 9.738 8.4 16.258 8.071 7.534 14.534 8.528 18.743 7.509 2.387-.578 4.294-2.9 5.5-4.793a2.293 2.293 0 0 0-1.3-3.436z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div className='h-[1.5px] w-full bg-gray-200 m-5' />
        </div>


        <div className='flex w-full items-start justify-start m-5'>
          <p className='text-gray-200 font-light md:text-md text-xs '> ALL RIGHTS RESERVED © 2024 MOSCAF GROUP</p>
        </div>

      </div>
    </div>
  )
}


export default Footer