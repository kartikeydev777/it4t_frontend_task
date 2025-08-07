
import IMAGES from '../../assets/Images'

export default function Activity() {
    return (
        <>
            <div className='relative min-h-[100dvh]'>
                <div className='h-fit w-[450px] z-10 absolute top-0 left-0 bg-gray-50 overflow-hidden hidden lg:block'>
                    <img src={IMAGES.ActivityImg} alt="" width={150} className='-ml-10' />
                </div>
                <div className="grid-cols-3 grid-rows-2 w-full gap-6 z-20 absolute top-20 hidden lg:grid">
                    <div className="flex flex-col items-center justify-center h-80 text-center w-full px-4">

                        <div className="flex items-center w-full max-w-lg justify-center">
                            <h2 className="text-3xl nata-sans-700 text-gray-900 whitespace-nowrap ml-15">Pick your</h2>
                            <div className="flex-grow ml-4 border-t-2 border-cyan-500"></div>
                        </div>


                        <div className="flex items-center w-full max-w-lg justify-center mt-1">
                            <div className="flex-grow mr-4 border-t-2 border-cyan-500"></div>
                            <h2 className="text-3xl leckerli-one-regular text-gray-900 whitespace-nowrap mr-15">activity</h2>
                        </div>

                        <p className="mt-4 text-sm nata-sans-400 text-gray-600 text-start max-w-md">
                            Life would not be such a beautiful <br />
                            thing without sport, right?
                        </p>
                    </div>


                    <div
                        className="relative bg-cover h-80 bg-center shadow-lg overflow-hidden"
                        style={{ backgroundImage: `url(${IMAGES.footerBG})` }}
                    >

                        <div className="absolute inset-0 bg-black/30 bg-opacity-30" />


                        <div className="relative z-10 flex flex-col justify-end h-full p-5 text-white">
                            <h3 className="text-lg font-semibold nata-sans-600">Diving holidays</h3>
                            <p className="text-sm mt-2">
                                Book the best scuba dive holiday locations worldwide at the cheapest prices online right NOW. Be
                                sure of only the best scuba diving schools and dive resorts... personally checked by us.
                            </p>


                            <button className="mt-4 text-white nata-sans-600 border-white border text-sm px-4 py-2 rounded flex items-center justify-center gap-2  transition">
                                Explore
                                <span className="text-lg"><i className="ri-arrow-right-line text-sm"></i></span>
                            </button>
                        </div>
                    </div>

                    <div className="col-span-2 col-start-1 row-start-2 w-11/12  ml-auto  p-3.5 flex items-end" style={{ backgroundImage: `url(${IMAGES.img2})` }}>

                        <h3 className="text-lg font-semibold text-white nata-sans-600">Kitesurfing holidays</h3></div>
                    <div className="row-span-2 col-start-3 row-start-1  h-full bg-center p-3.5 flex items-end" style={{ backgroundImage: `url(${IMAGES.img1})` }}>
                        <h3 className="text-lg font-semibold text-white nata-sans-600 ">Windsurfing holidays</h3>
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 z-20 relative lg:hidden"
                >

                    <div className="order-1 md:order-1 flex flex-col items-center justify-center h-fit md:h-80 text-center w-full px-4">
                        <div className="flex items-center w-full max-w-lg justify-center">
                            <h2 className="text-3xl nata-sans-700 text-gray-900 whitespace-nowrap">Pick your</h2>
                            <div className="flex-grow ml-4 border-t-2 border-cyan-500"></div>
                        </div>
                        <div className="flex items-center w-full max-w-lg justify-center mt-1">
                            <div className="flex-grow mr-4 border-t-2 border-cyan-500"></div>
                            <h2 className="text-3xl leckerli-one-regular text-gray-900 whitespace-nowrap">activity</h2>
                        </div>
                        <p className="mt-4 text-sm nata-sans-400 text-gray-600 text-start  text-balance">
                            Life would not be such a beautiful
                            thing without sport, right?
                        </p>
                    </div>


                    <div
                        className="order-2 md:order-2 relative bg-cover h-64 md:h-80 bg-center shadow-lg overflow-hidden"
                        style={{ backgroundImage: `url(${IMAGES.footerBG})` }}
                    >
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="relative z-10 flex flex-col justify-end h-full p-5 text-white">
                            <h3 className="text-lg font-semibold nata-sans-700">Diving holidays</h3>
                            <p className="text-sm mt-2">
                                Book the best scuba dive holiday locations worldwide at the cheapest prices online right NOW. Be
                                sure of only the best scuba diving schools and dive resorts... personally checked by us.
                            </p>
                            <button className="mt-4 text-white nata-sans-700 border-white border text-sm px-4 py-2 rounded flex items-center justify-center gap-2 transition">
                                Explore <span className="text-lg"><i className="ri-arrow-right-line text-sm"></i></span>
                            </button>
                        </div>
                    </div>

                    <div
                        className="order-3 md:order-4 row-span-1 md:row-span-2 col-span-1 h-24 md:h-full bg-cover bg-center p-4 flex items-end"
                        style={{ backgroundImage: `url(${IMAGES.img1})` }}
                    >
                        <h3 className="text-lg font-semibold text-white nata-sans-600">Windsurfing holidays</h3>
                    </div>

                    <div
                        className="order-4 md:order-3 col-span-1 md:col-span-2 h-24 md:h-80 bg-cover bg-center p-4 flex items-end"
                        style={{ backgroundImage: `url(${IMAGES.img2})` }}
                    >
                        <h3 className="text-lg font-semibold text-white nata-sans-600">Kitesurfing holidays</h3>
                    </div>
                </div>


            </div>
        </>
    )
}
