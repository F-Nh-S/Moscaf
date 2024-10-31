import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Pages/Footer'
import G1 from "../Assets/G1.png"
import G2 from "../Assets/G2.jpg"
import G3 from "../Assets/G3.jpg"
import G4 from "../Assets/G4.jpg"
import G5 from "../Assets/G5.jpg"
import G6 from "../Assets/G6.jpg"


const Gallery = () => {

    useEffect(() => {
        document.title = "Moscaf Group - Gallery"
    }, []);

    return (
        <div className='h-fit '>
            <NavBar />
            <div className='flex sm:h-48 h-28 items-center justify-center sm:text-5xl text-4xl text-center'>
                <div className='flex flex-col items-center justify-center text-zinc-700'>
                    <p className='font-medium sm:text-xl text-sm '>What's inside ?</p>
                    <h1 className='sm:text-7xl text-4xl font-extrabold'>Gallery</h1>
                </div>
            </div>

            <div className='sm:p-5 p-3'>
                <div class="grid grid-cols-2 md:grid-cols-3 sm:gap-4 gap-2">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={G1} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={G2} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={G3} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={G4} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={G5} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={G6} alt="" />
                    </div>
                </div>
            </div>

            <div className='sm:h-0 h-10'/>
            <Footer />
        </div>
    )
}

export default Gallery