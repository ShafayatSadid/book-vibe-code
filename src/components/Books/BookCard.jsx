import React from 'react';
import Badge from '../Badge/Badge';
import { CiStar } from 'react-icons/ci';

const BookCard = ({ book }) => {

    
    return (
        <div className='p-6 border border-[#131313]/15 w-93.5 mx-auto'>
            {/* card image */}
            <div className='bg-[#F3F3F3] max-w-81.5 py-8 rounded-2xl'>
                <img className='h-41.5 mx-auto' src={book.image} alt="" />
            </div>
            {/* card budges */}
            <div className='flex items-center gap-2 mt-6'>
                {
                    book.tags.map(tag => <Badge text={tag} />)
                }
            </div>
            {/* card title */}
            <div className='mb-5 border-b-2 border-dashed border-gray-300'>
                <h2 className='my-4 playfair text-[1.5rem] text-[#131313] font-bold '>{book.bookName} </h2>
                <p className='pb-5 text-[1rem] text-[#131313]/80 font-medium '>By: {book.author} </p>
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
    );
};

export default BookCard;