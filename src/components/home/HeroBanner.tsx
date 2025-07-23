import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

import { HeroBannerList } from '../TempData';
import { Link } from 'react-router-dom';

const colors = ["#5E936C", "#3E5F44", "#21AD61", "#E8FFD7"]

const HeroBanner = () => {
    return (
        <div className='py-2 round-md'>
            <Swiper
                grabCursor={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
            >
                {HeroBannerList.map((banner, i) => (
                    <SwiperSlide key={banner.id}>
                        <div className="rounded-md sm:h-[400px] h-96"
                            style={{ backgroundColor: colors[i] }}
                        >
                            <div className='flex items-center justify-center'>
                                <div className='hidden lg:flex justify-center w-1/2 p-8'>

                                    <div className='text-center'>
                                        <h3 className='text-xl text-white font-bold'>
                                            {banner.title}
                                        </h3>
                                        <h1 className='text-3xl text-white font-bold mt-2'>
                                            {banner.subtitle}
                                        </h1>
                                        <p className='text-white font-bold'>
                                            {banner.description}
                                        </p>
                                        <Link to="/products"
                                            className='mt-6 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800'
                                        >
                                            Shop
                                        </Link>
                                    </div>
                                </div>
                                <div className='w-full max-w-[400px] aspect-square flex items-center justify-center'>
                                    <img className='object-contain w-full h-full' 
                                        src={banner?.image} alt={banner.subtitle}/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default HeroBanner;
