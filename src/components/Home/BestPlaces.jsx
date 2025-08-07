import React from 'react'
import IMAGES from '../../assets/Images'
import FindPlaces from '../global/FindPlaces'

export default function BestPlaces() {
    return (
        <section className='mb-5 flex flex-col items-center px-4'>
            <div className='flex flex-col lg:flex-row gap-5 items-center w-full my-5 lg:my-0'>
                <div className="flex flex-col items-center justify-center text-center w-full lg:w-72">
                    <div className="flex items-center w-full justify-center">
                        <h2 className="text-2xl sm:text-3xl nata-sans-700 text-gray-800 whitespace-nowrap">Best places</h2>
                        <div className="flex-grow ml-4 border-t-2 border-cyan-500"></div>
                    </div>
                    <div className="flex items-center w-full justify-center mt-1">
                        <div className="flex-grow mr-4 border-t-2 border-cyan-500"></div>
                        <h2 className="text-2xl sm:text-3xl leckerli-one-regular text-gray-900 whitespace-nowrap">for any sport?</h2>
                    </div>
                </div>
                <div className='w-full max-w-xs sm:max-w-md lg:max-w-lg hidden lg:block'>
                    <img src={IMAGES.best_places} alt="Best Places" className='w-full object-cover' />
                </div>
            </div>

            <FindPlaces />
        </section>
    )
}
