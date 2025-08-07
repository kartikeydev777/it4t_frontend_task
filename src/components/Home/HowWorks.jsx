import React from 'react'
import IMAGES from '../../assets/Images'

export default function HowWorks() {
    return (
        <>
            <section className=' mx-auto relative lg:my-32 mb-[100dvh] mt-5'>
                <div className='w-full'>
                    <div className="flex flex-col items-center justify-center text-center lg:w-96 lg:px-4 ">

                        <div className="flex items-center w-full max-w-lg justify-center">
                            <h2 className="text-3xl nata-sans-700 text-gray-900 whitespace-nowrap lg:ml-15 mr-2">How does this</h2>
                            <div className="flex-grow lg:ml-4  border-t-2 border-cyan-500"></div>
                        </div>


                        <div className="flex items-center w-full max-w-lg justify-center mt-1">
                            <div className="flex-grow mr-4 border-t-2 border-cyan-500"></div>
                            <h2 className="text-3xl leckerli-one-regular text-gray-900 whitespace-nowrap mr-15">work?</h2>
                        </div>
                    </div>
                </div>

                <div className=' mb-36 mt-20 hidden lg:block relative'>
                    <div className='absolute'><img src={IMAGES.lineDesk1} alt="" width={'90%'} /></div>

                    <div className='py-8 -px-4 flex gap-4 items-start'>
                        <img src={IMAGES.num1} alt="" />
                        <div className='w-48'>
                            <h1 className='nata-sans-700 leading-5'>Find your perfect resort</h1>
                            <p className='nata-sans-400 text-xs mt-1'>use the 'resort finder' if you're not sure the best price for your sport, level and travel month</p>
                             <button className="flex items-center justify-center gap-1 text-orange-600 text-sm nata-sans-400">
                                Use finder <i className="ri-arrow-right-circle-fill text-lg"></i>
                            </button>
                        </div>
                    </div>

                    <div className='absolute left-70 top-28   flex gap-4 items-start'>
                        <img src={IMAGES.num2} alt="" />
                        <div className='w-52'>
                            <h1 className='nata-sans-700 leading-5'>Choose a hotel and flights</h1>
                            <p className='nata-sans-400 text-xs mt-1'>All our properties are hand picked. We offer all major airlines from world wide departure airports</p>
                        </div>
                    </div>

                    <div className='absolute right-64 top-48  flex gap-4 items-start'>
                        <img src={IMAGES.num3} alt="" />
                        <div className='w-52'>
                            <h1 className='nata-sans-700 leading-5'>Choose your hotel room</h1>
                            <p className='nata-sans-400 text-xs mt-1'>Adevntures offer the best travel protection in the market</p>
                        </div>
                    </div>

                </div>

                <div className=' my-16 hidden lg:block relative'>
                    <div className='absolute'><img src={IMAGES.lineDesk2} alt="" width={'90%'} /></div>

                    <div className='py-8 px-24 flex gap-4 items-start'>
                        <img src={IMAGES.num4} alt="" />
                        <div className='w-48'>
                            <h1 className='nata-sans-700 leading-5'>Add Sports & Airport Transfer</h1>
                            <p className='nata-sans-400 text-xs mt-1'>we only work with the best sport centres</p>
                        </div>
                    </div>
                    <div className='absolute right-80 px-3 top-40 flex gap-4 items-start'>
                        <img src={IMAGES.num5} alt="" />
                        <div className='w-48'>
                            <h1 className='nata-sans-700 leading-5'>Add Names, Pay & book online</h1>
                            <p className='nata-sans-400 text-xs text-balance mt-1'>we have partnered with Opaya and Barclays to protect and encrypt any payment details you provide to us.</p>
                        </div>
                    </div>
                    <div className='absolute -right-7  -bottom-46 flex gap-4 items-center flex-col justify-center text-center'>
                        <img src={IMAGES.holiday_tree} alt="" />
                        <div className='w-52'>
                            <h1 className='nata-sans-700 leading-5'>Enjoy your holidays!</h1>
                            <p className='nata-sans-400 text-xs mt-1'>we will be glad to heavy your feedback about our services!</p>
                        </div>
                    </div>
                </div>

                <div className='my-70 lg:hidden flex flex-col items-center justify-center gap-4 relative'>
                    <div className='absolute'><img src={IMAGES.lineMobile1} alt="" /></div>

                    <div className='absolute -top-60 left-2 flex gap-4 items-start'>
                        <img src={IMAGES.num1} width={30} alt="" />
                        <div className='w-60'>
                            <h1 className='nata-sans-700 leading-5'>Find your perfect resort</h1>
                            <p className='nata-sans-400 text-xs mt-1'>use the 'resort finder' if you're not sure the best price for your sport, level and travel month</p>
                            <button className="flex items-center justify-center gap-1 text-orange-600 text-sm nata-sans-400">
                                Use finder <i className="ri-arrow-right-circle-fill text-lg"></i>
                            </button>
                        </div>
                    </div>

                    <div className='absolute -top-20 left-4 gap-3 flex flex-row-reverse items-start'>
                        <img src={IMAGES.num2} width={30} alt="" />
                        <div className='w-60'>
                            <h1 className='nata-sans-700 leading-5'>Choose a hotel and flights</h1>
                            <p className='nata-sans-400 text-xs mt-1'>All our properties are hand picked. We offer all major airlines from world wide departure airports</p>

                        </div>
                    </div>

                    <div className='absolute top-24 left-12 gap-3 flex  items-start'>
                        <img src={IMAGES.num3} width={30} alt="" />
                        <div className='w-60'>
                            <h1 className='nata-sans-700 leading-5'>Choose your hotel room</h1>
                            <p className='nata-sans-400 text-xs mt-1'>Adevntures offer the best travel protection in the market</p>

                        </div>
                    </div>

                    <div className='absolute top-20'><img src={IMAGES.lineMobile2} alt="" /></div>

                    <div className='absolute -bottom-[18rem]  gap-3 flex flex-row-reverse items-start'>
                        <img src={IMAGES.num4} width={30} alt="" />
                        <div className='w-60'>
                            <h1 className='nata-sans-700 leading-5'>Add Sports & Airport Transfer</h1>
                            <p className='nata-sans-400 text-xs mt-1'>we only work with the best sport centres</p>

                        </div>
                    </div>

                    <div className='absolute -bottom-[32rem] left-8  gap-3 flex  items-start'>
                        <img src={IMAGES.num5} width={30} alt="" />
                        <div className='w-60'>
                            <h1 className='nata-sans-700 leading-5'>Add Names, Pay & book online</h1>
                            <p className='nata-sans-400 text-xs mt-1'>we have partnered with Opaya and Barclays to protect and encrypt any payment details you provide to us.</p>

                        </div>
                    </div>

                    <div className='absolute -left-5  -bottom-[45rem] flex gap-4 items-center flex-col justify-center text-center'>
                        <img src={IMAGES.holiday_tree} alt="" />
                        <div className='w-52'>
                            <h1 className='nata-sans-700 leading-5'>Enjoy your holidays!</h1>
                            <p className='nata-sans-400 text-xs mt-1'>we will be glad to heavy your feedback about our services!</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
