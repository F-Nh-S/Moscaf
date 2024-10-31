import React from 'react'
import Refrigerant from "../Assets/Truck1.png"
import ReExport from "../Assets/Crane.png"
import Heavy from "../Assets/Truck2.png"
import { motion } from "framer-motion"
import NavBar from '../Components/NavBar'
import Footer from '../Pages/Footer'

const Services = () => {
    return (
        <div className='h-fit overflow-hidden' id='services'>
            <NavBar />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className='flex flex-col items-center justify-center text-gray-800 sm:p-20 py-14'>
                <p className='font-medium sm:text-xl text-sm'>Moscaf Transport LLC</p>
                <h1 className='sm:text-7xl text-4xl font-black'>Logistics Solutions</h1>
            </motion.div>

            <div className='flex flex-col items-center justify-center sm:gap-14 gap-10 text-center'>
                <div className='flex flex-col sm:flex-row w-full'>
                    <div className='flex flex-col sm:w-1/2 sm:gap-8 gap-5 sm:p-10'>
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: "-20%" }
                            }}
                            className='sm:text-4xl text-2xl font-montserrat px-10'>Refrigerated <span className=' text-red-600'>Truck</span> Transport</motion.h1>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            variants={{
                                visible: { opacity: 1 },
                                hidden: { opacity: 0 }
                            }}
                            className='sm:text-lg text-sm text-zinc-800 text-left sm:p-0 px-10'>Refrigerated truck transport ensures the safe and reliable delivery of perishable goods across various industries. These specialized vehicles are equipped with advanced refrigeration systems that maintain precise temperature conditions throughout the journey, preserving the freshness and quality of sensitive cargo such as food, pharmaceuticals, and floral products. Designed to accommodate a wide range of cargo sizes and types, refrigerated trucks offer flexibility and efficiency, supported by real-time monitoring technology to ensure compliance with stringent quality standards. With a commitment to sustainability, modern refrigerated trucks are also adopting eco-friendly practices, making them indispensable in the seamless and responsible distribution of perishable goods worldwide.</motion.p>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: "20%" }
                        }}
                        className='sm:w-1/2 flex items-center justify-center'>
                        <img className='sm:h-96 w-auto' src={Refrigerant} />
                    </motion.div>
                </div>

                <div className='flex flex-col sm:flex-row w-full'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: "20%" }
                        }}
                        className='sm:w-1/2 sm:flex items-center justify-center hidden'>
                        <img className='sm:h-96 w-auto' src={ReExport} />
                    </motion.div>
                    <div className='flex flex-col sm:w-1/2 sm:gap-8 gap-5 p-10'>
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: "20%" }
                            }} className='sm:text-4xl text-2xl font-montserrat'><span className=' text-red-600'>Re-export</span> Services</motion.h1>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            variants={{
                                visible: { opacity: 1 },
                                hidden: { opacity: 0 }
                            }}
                            className='sm:text-lg text-sm text-zinc-800 text-left'>Re-export services play a pivotal role in international trade, facilitating the efficient movement of goods across borders. This specialized service involves the temporary import of products into one country and their subsequent export to another destination without undergoing significant alteration. It serves as a crucial mechanism for businesses seeking to optimize supply chains, manage inventory effectively, and navigate complex trade regulations. By leveraging re-export services, companies can streamline logistics, minimize customs duties, and expedite delivery to global markets, thereby enhancing competitiveness and expanding their reach on a global scale.</motion.p>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: "20%" }
                        }} className='sm:hidden flex items-center justify-center'>
                        <img className='h-48 sm:h-96 w-auto' src={ReExport} />
                    </motion.div>
                </div>

                <div className='flex flex-col sm:flex-row w-full'>
                    <div className='flex flex-col sm:w-1/2 sm:gap-8 gap-5 p-10'>
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: "-20%" }
                            }} className='sm:text-4xl text-2xl  font-montserrat'>Heavy <span className=' text-red-600'>Truck Cargo</span> Transport</motion.h1>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            variants={{
                                visible: { opacity: 1 },
                                hidden: { opacity: 0 }
                            }}
                            className='sm:text-lg text-sm text-zinc-800 text-left'>Heavy truck cargo transport is the backbone of industries reliant on the seamless movement of heavy and oversized goods. These specialized vehicles are equipped with robust engines and durable chassis designed to handle substantial loads across varied terrains and long distances. From construction materials and industrial equipment to oversized machinery, heavy truck transport ensures reliable and efficient delivery. By prioritizing safety and adherence to regulatory standards, these trucks play a pivotal role in supporting sectors such as construction, mining, and infrastructure development. With a focus on precision logistics and timely service, heavy truck cargo transport remains integral to facilitating the smooth flow of goods essential for global economic growth.</motion.p>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: "20%" }
                        }} className='sm:w-1/2 flex items-center justify-center'>
                        <img className=' sm:h-96 sm:w-auto' src={Heavy} />
                    </motion.div>
                </div>

            </div>
            <div className='h-10 sm:hidden' />
            <Footer />
        </div>
    )
}

export default Services
