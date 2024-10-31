import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useViewportScroll } from 'framer-motion'

const DesignPage = () => {
    const controls = useAnimation();
    const { scrollYProgress } = useViewportScroll();

    useEffect(() => {
        return scrollYProgress.onChange((y) => {
            const scale = 1.5 - y * 0.5;
            controls.start({ scale: Math.max(scale, 1) });
        });
    }, [scrollYProgress, controls]);

    return (
        <div className='w-full h-96 flex items-center justify-center text-center overflow-hidden'>
            <motion.div 
                initial={{ scale: 1.5 }}
                animate={controls}
                onViewportEnter={() => null}
                onViewportLeave={() => null}                    
                className='h-full flex flex-col items-center justify-center'
            >
                <div className='w-3/4 flex items-start'>
                    <h2 className='sm:text-3xl text-xs text-zinc-500'>Whether you are a new driver or</h2>
                </div>

                <div className='w-full flex items-start'>
                    <h1 className='text-gray-800 font-black sm:text-7xl text-4xl'>Far beyond your millionth mile</h1>
                </div>

                <div className='w-4/6 flex justify-end py-2'>
                    <h2 className='sm:text-3xl text-xs text-zinc-500'>why not start your journey with us today?</h2>
                </div>
            </motion.div>
        </div>
    )
}

export default DesignPage
