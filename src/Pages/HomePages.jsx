import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from './Footer'
import "../Styles/animation.css"
import Man from "../Assets/Customs.png"
import DesignPage from './DesignPage'
import ClientPages from './ClientPages'
import { motion, useAnimation } from 'framer-motion'
import { useViewportScroll } from 'framer-motion'
import { HiArrowLongDown } from "react-icons/hi2";
import { RiArrowDropRightLine } from "react-icons/ri";

const HomePages = () => {

  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollYProgress.onChange((y) => {
      const x = y * 200; // Adjust the factor to control the speed of the animation
      controls.start({ x: x <= 100 ? x : 100 }); // Ensure it stops at the intended position
    });
  }, [scrollYProgress, controls]);

  return (
    <div className='min-h-screen h-fit bg-stone-200'>

      <NavBar />

      <div className='w-full flex items-center justify-center'>
        <div id='SildeShowHome' className="h-[80vh] w-full m-5 rounded-3xl flex flex-col justify-between p-3">
          <div className='flex flex-col md:flex-row justify-between md:items-end gap-5 mt-auto'>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
              }}
              className='text-white font-black text-4xl md:text-7xl'>
              <h1>MOVING</h1>
              <h1>WORLDS</h1>
            </motion.div>
            <div className='h-32 w-80 bg-black/60 rounded-3xl md:flex hidden'>
              <div className='h-full w-4/5 text-white text-left flex p-4 text-sm items-center justify-center'>
                <p>We strive for excellence in every step of our work, making the process of moving goods fast, safe and reliable for our customers</p>
              </div>
              <div className='bg-green-400 h-full w-1/5 rounded-e-3xl flex items-center justify-center text-6xl'>
                <a href='#Services'><HiArrowLongDown className='text-gray-700 hover:text-gray-500' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-start gap-16 lg:gap-64 px-8 -mt-5'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}>
          <div className='font-black text-4xl md:text-7xl text-gray-800'>
            <h1>CREATING</h1>
            <h1>CONNECTIONS.</h1>
          </div>
          <div className='text-sm text-black font-semibold w-2/3 p-1 my-2 gap-4 flex flex-col'>
            <p>Our company is a leading provider of logistics solutions, ensuring efficient delivery of goods around the world</p>
            <p>We strive for excellence in every step of our work, making the process of moving goods fast, safe and reliable for our customers</p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
          id="Services"
          className='w-full md:w-508 md:flex md:flex-col gap-4 md:mt-4 md:mx-36 flex-row items-center justify-center'>

          <div className='flex flex-row h-44 md:w-full md:w-1/2 gap-4 items-center justify-center'>
            <div className='h-full bg-zinc-400 rounded-3xl w-full md:w-1/2 flex flex-col items-center justify-center gap-2 p-3'>
              <div className='w-full'>
                <div className='font-semibold flex flex-col items-center md:text-md text-xs text-center'>
                  <a href='/services'><p className='text-zinc-900 hover:text-zinc-700'>Refrigerated Transport➜</p></a>
                </div>
              </div>
              <div className="bg-[url('../Assets/Refri.webp')] bg-center bg-cover h-32 md:w-56 w-32 rounded-3xl"></div>
            </div>

            <div className='h-full bg-zinc-400 rounded-3xl w-full md:w-1/2 flex flex-col items-center justify-center gap-2 p-3'>
              <div className='w-full'>
                <div className='font-semibold flex flex-col items-center md:text-md text-xs'>
                <a href='/services'><p className='text-zinc-900 hover:text-zinc-700'>Re-Export services ➜</p></a>
                </div>
              </div>
              <div className="bg-[url('../Assets/Re.jpeg')] bg-center bg-cover h-32 md:w-56 w-32 rounded-3xl"></div>
            </div>
          </div>

          <div className='h-full bg-zinc-400 rounded-3xl w-full flex flex-col items-center justify-center gap-2 p-3 my-4 md:my-0'>
            <div className='w-full'>
              <div className='font-semibold flex flex-col items-center md:text-md text-xs'>
              <a href='/services'><p className='text-zinc-900 hover:text-zinc-700'>Heavy-truck cargo transport ➜</p></a>
              </div>
            </div>
            <div className="bg-[url('../Assets/Heavy.jpeg')] bg-center bg-cover h-32 w-full rounded-3xl"></div>
          </div>

        </motion.div>
      </div>

      <div className='md:h-20 h-0'></div>

      <div className='w-full flex md:flex-row flex-col items-center justify-center md:gap-0 gap-4'>

        <motion.div
          initial={{ x: 0 }}
          animate={controls}
          onViewportEnter={() => null}
          onViewportLeave={() => null}
          className='lg:mx-10 lg:-my-44 w-1/2 hidden lg:block'>
          <img className='h-5/6' src={Man} />
        </motion.div>

        <div

          className='lg:mx-0 lg:-my-44 w-1/2 block lg:hidden'>
          <img className='h-5/6' src={Man} />
        </div>



        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
          className='md:w-1/2 flex flex-col md:items-start items-center gap-3 text-left'>
          <div className='font-black md:text-7xl text-4xl text-gray-800'>
            <h2>CUSTOMS </h2>
            <h2>BROKERAGE</h2>
          </div>
          <div className='md:w-5/6 text-black font-semibold md:text-sm text-xs md:px-0 px-8'>
            <p>Customs brokerage is a vital service that facilitates the smooth clearance of goods through customs barriers for importers and exporters. These professionals possess expert knowledge of customs regulations, tariffs, and documentation requirements, ensuring compliance with complex international trade laws. By navigating bureaucratic processes efficiently, customs brokers expedite the movement of goods across borders, minimizing delays and avoiding penalties. Their role is crucial in optimizing supply chain operations, reducing costs, and ensuring that shipments reach their destinations swiftly and seamlessly. Whether dealing with imports or exports, customs brokerage services provide essential support to businesses aiming to navigate global markets with ease and compliance.</p>
          </div>
        </motion.div>
      </div>

      <div className='md:h-44 h-0'></div>
      <div className='flex items-center justify-center w-full'>
        <div className='w-5/6'>
          <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap text-gray-700 font-montserrat text-xl">
              <span className="mx-4">⬤</span>
              <span className="mx-2">Moscaf</span>
              <span className="mx-2">Group</span>
              <span className="mx-2">LLC</span>
              <span className="mx-4">⬤</span>
              <span className="mx-2">Moscaf</span>
              <span className="mx-2">Group</span>
              <span className="mx-2">LLC</span>
              <span className="mx-4">⬤</span>
              <span className="mx-2">Moscaf</span>
              <span className="mx-2">Group</span>
              <span className="mx-2">LLC</span>
              <span className="mx-4">⬤</span>
              <span className="mx-2">Moscaf</span>
              <span className="mx-2">Group</span>
              <span className="mx-2">LLC</span>
              <span className="mx-4">⬤</span>
              <span className="mx-2">Moscaf</span>
              <span className="mx-2">Group</span>
              <span className="mx-2">LLC</span>
            </div>
            <div className="absolute top-0 animate-marquee2 py-12 whitespace-nowrap text-gray-700 font-montserrat text-xl">
              <span className="mx-4">⬤</span>
              <span className="mx-2">Moscaf</span>
              <span className="mx-2">Group</span>
              <span className="mx-2">LLC</span>
              <span className="mx-4">⬤</span>
              <span className="mx-2">Moscaf</span>
              <span className="mx-2">Group</span>
              <span className="mx-2">LLC</span>
              <span className="mx-4">⬤</span>
              <span className="mx-2">Moscaf</span>
              <span className="mx-2">Group</span>
              <span className="mx-2">LLC</span>
              <span className="mx-4">⬤</span>
              <span className="mx-2">Moscaf</span>
              <span className="mx-2">Group</span>
              <span className="mx-2">LLC</span>
              <span className="mx-4">⬤</span>
              <span className="mx-2">Moscaf</span>
              <span className="mx-2">Group</span>
              <span className="mx-2">LLC</span>
            </div>
          </div>
        </div>
      </div>
      <ClientPages />
      <DesignPage />
      <Footer />
    </div>
  )
}

export default HomePages
