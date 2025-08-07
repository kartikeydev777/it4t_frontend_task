import React from 'react';

export default function SearchBar() {
    return (
        <div
            className='bg-white shadow-xl px-4 py-3 flex flex-col justify-between space-y-6'
            id='search-box'
        >

            <div className='flex flex-wrap gap-2 text-sm'>
                <h4 className='nata-sans-700 text-gray-800'>Ready for an adventure?</h4>
                <span className='nata-sans-400 text-gray-600'>
                    Let's find the best option for you!
                </span>
            </div>

 
            <div className='flex flex-wrap lg:flex-nowrap justify-between items-end gap-4 px-0 lg:px-5'>
          
                <div className='flex flex-col w-full sm:w-[48%] lg:w-48'>
                    <div className='flex justify-between text-sm nata-sans-500 mb-1'>
                        <h3>
                            Sport <span className='text-red-400'>*</span>
                        </h3>
                        <i className='ri-menu-line text-gray-400 font-bold'></i>
                    </div>
                    <input
                        type='text'
                        className='text-sm w-full outline-none nata-sans-500 text-gray-700 border-b border-gray-200  px-2 py-1 focus:border-orange-500 translate duration-300'
                        placeholder='Diving'
                    />
                </div>
                <div className='w-px h-10 bg-gray-300 hidden lg:block'></div>


                <div className='flex flex-col w-full sm:w-[48%] lg:w-48'>
                    <div className='flex justify-between text-sm nata-sans-500 mb-1'>
                        <h3>
                            Level <span className='nata-sans-400 opacity-70'>(optional)</span>{' '}
                            <span className='text-red-400'>*</span>
                        </h3>
                       
                        <i className='ri-bar-chart-line text-gray-400 font-bold'></i>
                    </div>
                    <input
                        type='text'
                        className='text-sm w-full outline-none nata-sans-500 text-gray-700 border-b border-gray-200  px-2 py-1 focus:border-orange-500 translate duration-300'
                        placeholder='Beginner'
                    />
                </div>

                <div className='w-px h-10 bg-gray-300 hidden lg:block'></div>
                {/* Where */}
                <div className='flex flex-col w-full lg:w-96'>
                    <div className='flex justify-between text-sm nata-sans-500 mb-1'>
                        <h3>
                            Where? <span className='text-red-400'>*</span>
                        </h3>
                        <i className='ri-map-pin-2-line text-gray-400 font-bold'></i>
                    </div>
                    <input
                        type='text'
                        className='text-sm w-full outline-none nata-sans-500 text-gray-700 border-b border-gray-200  px-2 py-1 focus:border-orange-500 translate duration-300'
                        placeholder='Ex Gauna Egypt'
                    />
                </div>
                <div className='w-px h-10 bg-gray-300 hidden lg:block'></div>


                <div className='flex flex-col w-full sm:w-[48%] lg:w-48'>
                    <div className='flex justify-between text-sm nata-sans-500 mb-1'>
                        <h3>
                            When? <span className='text-red-400'>*</span>
                        </h3>
                        <i className='ri-calendar-line text-gray-400 font-bold'></i>
                    </div>
                    <input
                        type='text'
                        className='text-sm w-full outline-none nata-sans-500 text-gray-700 border-b border-gray-200  px-2 py-1 focus:border-orange-500 translate duration-300'
                        placeholder='Any date'
                    />
                </div>
                <div className='w-px h-10 bg-gray-300 hidden lg:block'></div>


                <div className='flex flex-col w-full sm:w-[48%] lg:w-48'>
                    <div className='flex justify-between text-sm nata-sans-500 mb-1'>
                        <h3>
                            Who? <span className='text-red-400'>*</span>
                        </h3>
                        <i className='ri-group-line text-gray-400 font-bold'></i>
                    </div>
                    <input
                        type='text'
                        className='text-sm w-full outline-none nata-sans-500 text-gray-700 border-b border-gray-200  px-2 py-1 focus:border-orange-500 translate duration-300'
                        placeholder='Guests'
                    />
                </div>


                <div className='flex items-end w-full sm:w-auto'>
                    <button className='bg-orange-500 text-white w-full sm:w-12 h-12 flex items-center justify-center '>
                        <i className='ri-search-line'></i>
                    </button>
                </div>
            </div>


            <div className='flex items-center accent-orange-400 mt-1'>
                <input
                    type='checkbox'
                    id='includeFlights'
                    className='h-4 w-4 text-orange-600 rounded border-orange-500'
                />
                <label
                    htmlFor='includeFlights'
                    className='ml-2 text-sm nata-sans-400 text-gray-700'
                >
                    Include flights
                </label>
            </div>
        </div>
    );
}
