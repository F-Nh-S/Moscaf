import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Pages/Footer'

const About = () => {

    useEffect(() => {
        document.title = "Moscaf Group - About"
    }, []);

    return (
        <div className='h-fit  '>
            <NavBar />

            <div className='flex h-48 items-center justify-center sm:text-5xl text-4xl text-center'>
                <div className='flex flex-col items-center justify-center text-gray-800'>
                    <h1 className='sm:text-7xl text-4xl font-extrabold'>Moscaf Group</h1>
                    <p className='font-medium sm:text-xl text-sm '>Since 1985</p>
                </div>
            </div>

            <div className='flex flex-col sm:px-20 items-center sm:block font-montserrat sm:text-5xl text-2xl'>
                <h1>ABOUT <span className='text-red-600'>MOSCAF</span></h1>
            </div>
            <div className=' font-josefin text-gray-700 p-10 sm:text-md text-sm flex flex-col gap-6'>
                <p>Founded in <span className='font-bold'>1985</span> by <span className='font-bold'>C P Mohamood</span>, Moscaf Group stands as a beacon of expertise and reliability in the logistics industry. Our decades-long experience and in-depth knowledge of transporting perishable goods, especially food items, make us the preferred choice for businesses seeking unparalleled logistics solutions in the <span className='font-bold'>GCC region</span>.</p>
                <p>Under the leadership of <span className='font-bold'>Mr. Sanith Changaroth</span> our <span className='font-bold'>Managing Director</span>, orchestrates a symphony of meticulous planning, cutting-edge technology, and industry expertise to ensure that every cargo reaches its destination with uncompromised freshness and quality. Our range of services is designed to cater to the unique requirements of perishable goods, providing unmatched solutions for temperature­ sensitive transportation challenges.</p>
                <p>Our mission at <span className='font-bold'>Moscaf Group</span> is to deliver exceptional Land transport solutions, prioritizing reliability, innovation, and client satisfaction. We strive to uphold the integrity of perishable goods, foster trusted partnerships, promote sustainability, empower our team, and pursue continuous improvement, ensuring we remain the preferred choice for our clients while making a positive impact on our communities.</p>
                <p>Supported by its subsidiary, <span className='font-bold text-red-500'>MAJID OBAID</span> Shipping, Moscaf Transport enhances its capabilities and reach in the transportation industry, further ensuring quality and efficiency.</p>
            </div>

            <div className='flex flex-col sm:px-20 items-center sm:block font-montserrat sm:text-5xl text-2xl'>
                <h1>VISION</h1>
            </div>
            <div className=' font-josefin text-gray-700 p-10 sm:text-md text-sm flex flex-col gap-6'>
                <p>To emerge as a premier provider of cutting-edge Land transport solutions, esteemed for our commitment to reliability, innovation, and excellence in perishable goods Logistics worldwide, enhancing value for our stakeholders and communities.</p>
            </div>

            <div className='flex flex-col sm:px-20 items-center sm:block font-montserrat sm:text-5xl text-2xl'>
                <h1>MISSION</h1>
            </div>
            <div className=' font-josefin text-gray-700 p-10 sm:text-md text-sm flex flex-col gap-6'>
                <p>Our mission at Moscaf Group is to deliver exceptional Land transport solutions, prioritizing reliability, innovation, and client satisfaction. We strive to uphold the integrity of perishable goods, foster trusted partnerships, promote sustainability, empower our team, and pursue continuous improvement, ensuring we remain the preferred choice for our clients while making a positive impact on our communities.</p>
            </div>


            <div className='h-10 sm:hidden' />
            <Footer />
        </div>
    )
}

export default About