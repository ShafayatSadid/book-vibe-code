import React from 'react';
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='bg-[#131313]/5 rounded-2xl max-w-292.5 mx-auto px-7 lg:px-30 py-10 lg:py-20 lg:flex items-center justify-between space-y-20 mt-5'>

            {/* banner text */}
            <div>
                <h1 className='text-[2.5rem] md:text-[3.5rem] font-bold playfair max-w-131'>Books to freshen up your bookshelf</h1>

                <a href="/books" className='btn btn-ghost button1 mt-10 lg:mt-17'>View The List</a>
            </div>

            {/* banner img */}
            <div>
                <img className='max-w-79.5' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;