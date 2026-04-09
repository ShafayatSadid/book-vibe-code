import React from 'react';
import Badge from '../Badge/Badge';
import { CiStar } from 'react-icons/ci';

const WishListCard = ({book}) => {
    return (
        <div className='lg:flex gap-6 p-6 border border-[#131313]/15 rounded-2xl max-w-[1169px] mx-auto mb-8'>

            {/* card image */}
            <div className='bg-[#F3F3F3] w-[230px] h-[230px] py-8 rounded-2xl'>
                <img className='w-[129px] h-[172px] mx-auto' src={book.image} alt="" />
            </div>

            <div>
                {/* card title */}
                <div className='mb-5 border-b-2 border-gray-300'>
                    <h2 className='my-4 playfair text-[2rem] md:text-[2.5rem] text-[#131313] font-bold'>{book.bookName} </h2>
                    <p className='pb-5 text-[1.25rem] md:text-[1.5rem] text-[#131313]/80 font-medium'>By: {book.author} </p>
                </div>

                {/* card budges */}
                <div className='flex items-center gap-2 mt-6'>
                    {
                        book.tags.map((tag, index) => <Badge key={index} text={tag} />)
                    }
                </div>

                {/* card category and rating */}
                <div className='flex justify-between'>
                    <p className='text-[1rem] text-[#131313]/80 font-medium '>{book.category}</p>
                    <div className='flex gap-3 items-center'>
                        <p className='text-[1rem] text-[#131313]/80 font-medium'>{book.rating}</p>

                        <CiStar className='text-2xl font-bold' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;