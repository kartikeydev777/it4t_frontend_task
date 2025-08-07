import React, { useState } from 'react'
import IMAGES from '../../assets/Images'

const data = [
    { month: "Jan", height: "h-2", active: false },
    { month: "Feb", height: "h-3", active: false },
    { month: "Mar", height: "h-3", active: false },
    { month: "Apr", height: "h-4", active: true },
    { month: "May", height: "h-5", active: true },
    { month: "Jun", height: "h-6", active: true },
    { month: "Jul", height: "h-8", active: true },
    { month: "Aug", height: "h-9", active: true },
    { month: "Sep", height: "h-8", active: true },
    { month: "Oct", height: "h-3", active: false },
    { month: "Nov", height: "h-2", active: false },
    { month: "Dec", height: "h-2", active: false },
];

const dummyCards = [
    {
        id: 1,
        place: "Antigua",
        price: 33,
        activities: "Hiking, Bicycle, Climbing",
        image: IMAGES.alacati_kitesurf,
        flag: IMAGES.antigua,
    },
    {
        id: 2,
        place: "Alacati",
        price: 40,
        activities: "Kitesurfing, Snorkeling",
        image: IMAGES.alacati_kitesurf,
        flag: IMAGES.antigua,
    },
    {
        id: 3,
        place: "Bali",
        price: 55,
        activities: "Diving, Yoga, Surfing",
        image: IMAGES.alacati_kitesurf,
        flag: IMAGES.antigua,
    },
];

export default function FindPlaces() {
    const [filters, setFilters] = useState({
        sport: 'Diving',
        level: 'All',
        month: 'Any month',
    });
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(dummyCards);


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updated = { ...filters, [name]: value };
        setFilters(updated);
        setLoading(true);
        setTimeout(() => {
            setResults(dummyCards);
            setLoading(false);
        }, 1000);
    };

    return (
        <>
            <div className='bg-white min-h-20 shadow-lg w-80 px-5    lg:w-full  lg:px-10 flex items-center'>
                <div className='w-1/3 '>
                    <h3 className=' nata-sans-600 text-gray-700'>Sport</h3>
                    <select onChange={handleFilterChange} className='w-full text-gray-500  nata-sans-500 outline-none'>
                        <option value="Diving">Diving</option>
                        <option value="Diving">Diving</option>
                        <option value="Diving">Diving</option>
                    </select>
                </div>
                <div className='h-10 w-0.5 mx-4 bg-black opacity-10'></div>
                <div className='w-1/3 '>
                    <h3 className=' nata-sans-600 text-gray-700'>Level</h3>
                    <select onChange={handleFilterChange} className='w-full text-gray-500  nata-sans-500 outline-none'>
                        <option value="Diving">All</option>
                        <option value="Diving">Diving</option>
                        <option value="Diving">Diving</option>
                    </select>
                </div>
                <div className='h-10 w-0.5 mx-4 bg-black opacity-10'></div>
                <div className='w-1/3 '>
                    <h3 className=' nata-sans-600 text-gray-700'>When?</h3>
                    <select onChange={handleFilterChange} className='w-full text-gray-500  nata-sans-500 outline-none'>
                        <option value="Diving">Any month</option>
                        <option value="Diving">Diving</option>
                        <option value="Diving">Diving</option>
                    </select>
                </div>
            </div>

            <section className='lg:px-10 md:px-10 my-5 flex gap-6'>
                {loading ? (
                    Array(3).fill(0).map((_, i) => (
                        <div key={i} className="lg:w-80 w-80 min-h-96 bg-white border border-gray-200 shadow-md animate-pulse">
                            <div className="bg-gray-300 h-52" />
                            <div className="p-4 space-y-4">
                                <div className="h-4 bg-gray-300 rounded w-1/2" />
                                <div className="h-4 bg-gray-300 rounded w-full" />
                                <div className="h-4 bg-gray-300 rounded w-2/3" />
                            </div>
                        </div>
                    ))
                ) : (
                    results.map((card) => (
                        <div key={card.id} className='lg:w-80  min-h-96 bg-white border border-gray-200 shadow-md'>
                            <div className='bg-gray-300 h-52 bg-cover' style={{ backgroundImage: `url(${card.image})` }}></div>
                            <div className='px-3 py-2 flex flex-col gap-4'>
                                <div className='flex justify-between items-center '>
                                    <div className='flex gap-2 items-center'>
                                        <img src={card.flag} width={20} alt="" /><h1 className='nata-sans-700 text-xl'>{card.place}</h1>
                                    </div>
                                    <div className='flex gap-1 items-start'>
                                        <span className='text-xs nata-sans-400'>from</span>
                                        <h4 className='nata-sans-700 text-orange-600 leading-5 text-xl'>{card.price}€</h4>
                                        <span className='text-xs nata-sans-400'>/Night</span>
                                    </div>
                                </div>

                                {/* Chart here */}
                                <div className="flex items-end gap-1 w-full max-w-md mx-auto">
                                    {data.map((item, idx) => (
                                        <div key={idx} className="flex flex-col items-center text-xs text-gray-600">
                                            <div
                                                className={`w-3 ${item.height} mb-1  ${item.active
                                                    ? "bg-gray-700"
                                                    : "bg-gray-300 border border-dashed border-gray-400"
                                                    }`}
                                            ></div>
                                            <span>{item.month}</span>
                                        </div>
                                    ))}
                                </div>

                                <hr className='w-full  opacity-20' />
                                <div>
                                    <h3 className='nata-sans-600 text-lg'>Other Activities:</h3>
                                    <span className='nata-sans-500 text-xs text-gray-600'>{card.activities}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </section>

        </>
    )
}
