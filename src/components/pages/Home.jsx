import React, { lazy, Suspense } from 'react'
import SearchBar from '../global/SearchBar'
import IMAGES from '../../assets/Images';
const Powered = lazy(() => import('../Home/Powered'));
const Activity = lazy(() => import('../Home/Activity'));
const HowWorks = lazy(() => import('../Home/HowWorks'));
const OurSecret = lazy(() => import('../Home/OurSecret'));
const NeedAdvice = lazy(() => import('../Home/NeedAdvice'));
const BestPlaces = lazy(() => import('../Home/BestPlaces'));
const NewsLetter = lazy(() => import('../Home/NewsLetter'));

export default function Home() {
    return (
        <>
            <section className='relative w-full scroll-smooth'>

                <div className='relative h-[75vh] min-h-[500px]'>
                    <img
                        src={IMAGES.banner}
                        alt="Ocean sports background"
                        className='w-full h-full object-cover brightness-90'
                    />
                    <div className='absolute inset-0 bg-black/30'></div>
                </div>


                <div className='relative z-10 lg:w-[75dvw] mx-auto transform lg:-mt-48 -mt-[28rem]'>

                    <div className='text-center mb-8'>
                        <h1 className='nata-sans-700 text-5xl text-white mb-2 text-balance'>
                            Ocean sports holidays <span className='leckerli-one-regular'>worldwide</span>
                        </h1>
                        <p className='nata-sans-200 text-white lg:text-lg'>
                            Windsurfing, kitesurfing, scuba diving, wing foiling, paddleboarding and many others
                        </p>
                    </div>

                    <div className='px-3'><SearchBar /></div>
                </div>
            </section>

            <section className='lg:w-[70dvw] w-80 mx-auto'>
                <Suspense fallback={<div className='text-center py-10'>Loading content...</div>}>
                    <Powered />
                    <Activity />
                    <HowWorks />
                    <OurSecret />
                    <NeedAdvice />
                    <BestPlaces />
                    <NewsLetter />
                </Suspense>
            </section>
        </>
    )
}