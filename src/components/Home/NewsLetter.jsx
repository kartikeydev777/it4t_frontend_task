
import IMAGES from '../../assets/Images'

export default function NewsLetter() {
    return (
        <div className='relative my-36 '>
            <div className='absolute h-auto bg-gray-50 shadow-md -top-16 left-1/2 transform -translate-x-1/2 w-11/12 md:w-10/12 flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center px-6 md:px-10 py-6'>

                <div className='border-l-4 border-cyan-500 pl-4 pr-2 w-full md:w-2/3'>
                    <h2 className='nata-sans-600 text-gray-800 text-xl md:text-2xl leading-snug'>Join our newsletter to</h2>
                    <p className='text-sm text-gray-600 nata-sans-500 mt-1'>stay up to date on features and releases</p>
                    <p className='text-xs mt-2 text-balance nata-sans-300 text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem dolor odio molestias quaerat quia vero</p>
                </div>

                <div className='w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4 md:mt-0'>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        className='h-10 w-full sm:w-auto px-4 border-b nata-sans-300 border-gray-300 outline-none focus:border-orange-500'
                    />
                    <button className='bg-orange-500 text-white px-6 py-2 text-sm nata-sans-500 w-full sm:w-auto'>
                        Subscribe
                    </button>
                </div>
            </div>

            <div
                className='w-full h-[45vh] bg-gray-200 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${IMAGES.footerBG})` }}
            ></div>
        </div>
    )
}
