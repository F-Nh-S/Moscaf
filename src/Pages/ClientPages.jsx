import React from 'react'
import { motion } from "framer-motion"
import { FaTruckLoading } from "react-icons/fa";


const ClientPages = () => {
    return (
        <div className='h-fit w-full md:my-56 my-72' id="clients">





            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 }
                }}
                className='flex flex-col h-48 items-center justify-center sm:text-5xl text-4xl text-center'>
                <div className='flex flex-col items-center justify-center text-gray-800 gap-5'>
                    <h1 className='sm:text-7xl text-4xl font-extrabold'>We keep good company.</h1>
                    <p className='font-medium sm:text-xl text-sm '>Together, we are stronger.</p>
                </div>

                <div>
                    <div class="grid grid-cols-2 md:grid-cols-4 grid-flow-row md:gap-10 gap-5 justify-center items-center p-5">
                        <div class="md:h-44 md:w-44 h-36 w-36 border-gray-300 border-2 bg-[url('../Assets/C1.png')] bg-contain bg-no-repeat bg-center hover:bg-gray-400/10"></div>
                        <div class="md:h-44 md:w-44 h-36 w-36 border-gray-300 border-2 bg-[url('../Assets/C2.png')] bg-contain bg-no-repeat bg-center hover:bg-gray-400/10"></div>
                        <div class="md:h-44 md:w-44 h-36 w-36 border-gray-300 border-2 bg-[url('../Assets/C3.png')] bg-contain bg-no-repeat bg-center hover:bg-gray-400/10"></div>
                        <div class="md:h-44 md:w-44 h-36 w-36 border-gray-300 border-2 bg-[url('../Assets/C4.png')] bg-contain bg-no-repeat bg-center hover:bg-gray-400/10"></div>
                        <div class="md:h-44 md:w-44 h-36 w-36 border-gray-300 border-2 bg-[url('../Assets/C5.png')] bg-contain bg-no-repeat bg-center hover:bg-gray-400/10"></div>
                        <div class="md:h-44 md:w-44 h-36 w-36 border-gray-300 border-2 bg-[url('../Assets/C6.png')] bg-contain bg-no-repeat bg-center hover:bg-gray-400/10"></div>
                        <div class="md:h-44 md:w-44 h-36 w-36 border-gray-300 border-2 bg-[url('../Assets/C7.png')] bg-contain bg-no-repeat bg-center hover:bg-gray-400/10"></div>
                        <div class="md:h-44 md:w-44 h-36 w-36 border-gray-300 border-2 bg-[url('../Assets/C8.png')] bg-contain bg-no-repeat bg-center hover:bg-gray-400/10"></div>
                    </div>

                </div>
            </motion.div>

        </div >
    )
}

export default ClientPages