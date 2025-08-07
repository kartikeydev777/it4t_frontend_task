
import IMAGES from '../../assets/Images'

export default function OurSecret() {
    return (
        <>
            <div className='w-full lg:mt-80  lg:min-h-[70dvh]   lg:relative lg:justify-between hidden lg:flex'>

                <div className='bg-gray-100 w-96 h-fit absolute top-20 left-0 py-14 flex flex-col gap-2' >
                    <div className="flex flex-col items-center justify-center text-center w-72 ">
                        <div className="flex items-center w-full max-w-lg justify-center">
                            <h2 className="text-3xl nata-sans-700 text-gray-900 whitespace-nowrap ml-15">What is </h2>
                            <div className="flex-grow ml-4 border-t-2 border-cyan-500"></div>
                        </div>
                        <div className="flex items-center w-full max-w-lg justify-center mt-1">
                            <div className="flex-grow mr-4 border-t-2 border-cyan-500"></div>
                            <h2 className="text-3xl leckerli-one-regular text-gray-900 whitespace-nowrap mr-15">our secret?</h2>
                        </div>
                    </div>
                    <div className='ps-10 pe-3 mt-2 flex flex-col gap-2 items-start'>
                        <p className='text-xs text-balance text-gray-700 nata-sans-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, repellendus corporis! Reprehenderit dolorum deleniti voluptate nobis, praesentium consequuntur suscipit nihil molestias officiis porro rem, iusto corporis vel dolore. Libero voluptatum, odit sint animi qui unde culpa in exercitationem quas, amet aliquid, aperiam inventore quidem quod nobis neque deserunt illum temporibus!</p>
                        <button className="flex items-center justify-center gap-1 text-orange-600 text-sm nata-sans-400">
                            Explore
                            <i className="ri-arrow-right-circle-fill text-lg"></i>
                        </button>
                        <div className='border-l-2 border-cyan-500 px-2 py-0 '>
                            <h2 className='nata-sans-600 text-gray-800 text-2xl leading-5'>1500+</h2>
                            <p className='text-sm text-gray-600 nata-sans-500 mt-1'>places around the world</p>
                        </div>
                    </div>
                </div>
                <div></div>
                <div className='bg-black w-4/5 h-96' style={{ backgroundImage: `url(${IMAGES.scubadiving_holidays})` }}>

                </div>
            </div>

            <div className='lg:hidden flex flex-col items-center justify-center gap-4 relative'>
                <div className='bg-gray-100 px-5 h-fit absolute top-20  py-14 flex flex-col gap-2' >
                    <div className="flex flex-col items-center justify-center text-center w-72 ">
                        <div className="flex items-center w-full max-w-lg justify-center">
                            <h2 className="text-3xl nata-sans-700 text-gray-900 whitespace-nowrap ml-15">What is </h2>
                            <div className="flex-grow ml-4 border-t-2 border-cyan-500"></div>
                        </div>
                        <div className="flex items-center w-full max-w-lg justify-center mt-1">
                            <div className="flex-grow mr-4 border-t-2 border-cyan-500"></div>
                            <h2 className="text-3xl leckerli-one-regular text-gray-900 whitespace-nowrap mr-15">our secret?</h2>
                        </div>
                    </div>
                    <div className='ps-10 pe-3 mt-2 flex flex-col gap-2 items-start'>
                        <p className='text-xs text-balance text-gray-700 nata-sans-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, repellendus corporis! Reprehenderit dolorum deleniti voluptate nobis, praesentium consequuntur suscipit nihil molestias officiis porro rem, iusto corporis vel dolore. Libero voluptatum, odit sint animi qui unde culpa in exercitationem quas, amet aliquid, aperiam inventore quidem quod nobis neque deserunt illum temporibus!</p>
                        <button className="flex items-center justify-center gap-1 text-orange-600 text-sm nata-sans-400">
                            Explore
                            <i className="ri-arrow-right-circle-fill text-lg"></i>
                        </button>
                        <div className='border-l-2 border-cyan-500 px-2 py-0 '>
                            <h2 className='nata-sans-600 text-gray-800 text-2xl leading-5'>1500+</h2>
                            <p className='text-sm text-gray-600 nata-sans-500 mt-1'>places around the world</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
