import React from 'react'
import IMAGES from '../../assets/Images'

export default function NeedAdvice() {
    return (
        <div
            className='lg:my-20 mt-[40rem] mb-10 bg-gray-200 w-full text-white h-auto md:h-80 px-6 sm:px-10 md:px-14 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6'
            style={{ backgroundImage: `url(${IMAGES.banner2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='space-y-3 w-full md:w-1/2'>
                <h2 className='nata-sans-700 text-2xl md:text-3xl'>
                    Need some <br />
                    <span className='leckerli-one-regular'>advice?</span>
                </h2>
                <p className='text-balance text-xs nata-sans-400 opacity-80'>
                    We have great first-hand knowledge of all Adventures locations, and we are passionate about Ocean Sports.{" "}
                    <span className='leckerli-one-regular'>Call, chat or message us for expert impartial advice.</span>
                </p>
            </div>


            <div className='flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto'>

                <div className='w-full md:w-36'>
                    <p className='text-xs nata-sans-400 text-balance'>
                        UK tour operator financial protection for worldwide customers
                    </p>
                    <span className='text-xs font-medium nata-sans-600 block mt-1'>
                        Mon-Sat 09:30–18:00 BST
                    </span>
                </div>

                <div className='flex gap-3'>
                    <div className='flex items-start flex-col justify-center w-28 h-24 bg-orange-500 p-2.5'>
                        <i className="ri-phone-fill text-4xl"></i>
                        <p className='text-xs nata-sans-500'>+44 20 3744 0141</p>
                    </div>
                    <div className='flex items-start flex-col justify-center w-28 h-24 bg-orange-500 p-2.5'>
                        <i className="ri-whatsapp-fill text-4xl"></i>
                        <p className='text-xs nata-sans-500'>+44 20 3744 0141</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
