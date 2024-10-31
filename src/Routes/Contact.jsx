import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Pages/Footer'
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


const Contact = () => {
    return (
        <div className=' sm:h-650 h-fit ' id="location">
            <NavBar />

            <div className='flex h-48 items-center justify-center sm:text-5xl text-4xl text-center'>
                <div className='flex flex-col items-center justify-center text-gray-800'>
                    <p className='font-medium sm:text-xl text-sm '>Stay Connected !</p>
                    <h1 className='sm:text-7xl text-4xl font-extrabold'>Connect Us</h1>
                </div>
            </div>

            <div className='h-full sm:flex'>
                <div className='sm:w-1/2 sm:h-full h-[400px]' >
                    <iframe className='w-full h-full'
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3610.8911205293316!2d55.393511999999994!3d25.173154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDEwJzIzLjQiTiA1NcKwMjMnMzYuNiJF!5e0!3m2!1sen!2sin!4v1719415118231!5m2!1sen!2sin" />
                </div>

                <div className='sm:w-1/2 flex items-center justify-center h-full sm:my-14'>
                    <div className='text-left h-full w-4/6 flex flex-col gap-5 my-10 sm:my-0'>
                        <h1 className='sm:text-4xl text-2xl font-thin text-black'>CENTRAL FRUITS & VEGETABLES MARKET</h1>
                        <div>
                            <p className='text-black font-extralight'>(AL AWEER FRUITS & VEGETABLES MARKET)</p>
                            <p className='text-black font-extralight'>Office# M - 03 & M-11</p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div>
                                <p className='text-black font-normal'>Contact Us :-</p>
                                <div className='flex flex-col sm:flex-row sm:gap-6 gap-2'>
                                    <a href='tel:+04 320 1906'>
                                        <p className='text-slate-500 font-extralight hover:underline hover:text-black flex gap-1'>
                                            <FaPhone className='my-1' />
                                            <span className='text-red-500'>+04 320 1906</span>
                                        </p>
                                    </a>
                                    <a href='tel:+04 320 1806'>
                                        <p className='text-slate-500 font-extralight hover:underline hover:text-black flex gap-1'>
                                            <FaPhone className='my-1' />
                                            <span className='text-red-500'>+04 320 1806</span>
                                        </p>
                                    </a>
                                </div>
                                <div className='flex gap-1 mt-2'>
                                    <MdAlternateEmail className='sm:my-1.5 my-1 text-gray-700' />
                                    <p className='text-red-600 font-extralight hover:underline hover:text-black'>
                                        <a href='mailto:info@moscaf.com'>info@moscaf.com</a>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className='text-black font-normal'>Contact Us :-</p>
                                <div className='flex flex-col gap-2'>
                                    <a href='tel:055 710 1085'>
                                        <p className='text-slate-500 font-extralight hover:underline hover:text-black flex gap-1'>
                                            <IoMdPerson className='my-1 sm:text-lg text-5xl' />
                                            Mr. Sanith Changaroth (Managing Director & Partner)
                                            <span className='text-red-500'>Ph: 055 710 1085</span>
                                        </p>
                                    </a>
                                    <a href='tel:055 957 9110'>
                                        <p className='text-slate-500 font-extralight hover:underline hover:text-black flex gap-1'>
                                            <IoMdPerson className='my-1 sm:text-lg text-4xl' />
                                            Mr. Kabeer Rifai (Operation Manager)
                                            <span className='text-red-500'>Ph: 055 957 9110</span>
                                        </p>
                                    </a>
                                    <a href='tel:050 153 6559'>
                                        <p className='text-slate-500 font-extralight hover:underline hover:text-black flex gap-1'>
                                            <IoMdPerson className='my-1 sm:text-lg text-4xl' />
                                            Mr. Seethi Thangal (Correspondent)
                                            <span className='text-red-500'>Ph: 050 153 6559</span>
                                        </p>
                                    </a>
                                    <a href='tel:050 732 0110'>
                                        <p className='text-slate-500 font-extralight hover:underline hover:text-black flex gap-1'>
                                            <IoMdPerson className='my-1 sm:text-lg text-4xl' />
                                            Mr. Abdul Mounem (Truck Operator)
                                            <span className='text-red-500'>Ph: 050 732 0110</span>
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href='https://maps.app.goo.gl/7dfRpT3bMpsrJBRg8'
                            className='text-yellow-500 font-extralight text-2xl hover:underline hover:text-black mt-5 sm:mt-0'>
                            GET DIRECTIONS
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact