import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Badge from '../../components/Badge/Badge';

const BookDetails = () => {

    const books = useLoaderData()
    const { id } = useParams();

    const expectedBook = books.find(book => book.bookId == id);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;

    return (
        <div className='px-4 mt-8 md:mt-12 lg:flex items-center gap-12 max-w-[1170px] mx-auto mb-[164px] '>
            {/* card image */}
            <figure className='bg-[#F3F3F3] max-w-[573px] lg:h-[711px] py-8 w-full flex items-center rounded-2xl'>
                <img className='h-86.25 md:h-106.25 mx-auto' src={image} alt="" />
            </figure>

            {/* book Deatils */}
            <div>
                {/* card title */}
                <div className=''>
                    <h2 className='my-4 playfair text-[2rem] md:text-[2.5rem] text-[#131313] font-bold '>{bookName} </h2>
                    <p className='pb-5 text-[1.25rem] md:text-[1.5rem] text-[#131313]/80 font-medium '>By: {author} </p>
                </div>

                {/* Card category */}
                <div className='py-4 mb-6 border-y-2 border-gray-300'>
                    <p className='text-[1.25rem] text-[#131313]/80 font-medium '>{category}</p>
                </div>

                {/* book review */}
                <div className='max-w-137.25'>
                    <p className='text-[#131313]/70 text-[1rem] '>
                        <span className='text-[#131313] font-bold'>Review: </span>
                        {review}
                    </p>
                </div>

                {/* card budges */}
                <div className='flex items-center gap-2 mt-6 pb-6.5 border-b-2 border-gray-300'>
                    <span className='text-[#131313] font-bold mr-4'>Tag</span>
                    {
                        tags.map((tag, index) => <Badge key={index} text={`#${tag}`} />)
                    }
                </div>

                {/* short summary of book */}
                <div className='mt-6 space-y-3'>
                    <p className='text-[1rem] text-[#131313]/70 '>
                        Number of Pages:
                        <span className='ml-[55px] md:ml-[65px] font-semibold text-[#131313]'>{totalPages}</span>
                    </p>

                    <p className='text-[1rem] text-[#131313]/70 '>
                        Publisher:
                        <span className='ml-[115px] md:ml-[125px] font-semibold text-[#131313]'>{publisher}</span>
                    </p>

                    <p className='text-[1rem] text-[#131313]/70 '>
                        Year of Publishing:
                        <span className='ml-[49px] md:ml-[59px] font-semibold text-[#131313]'>{yearOfPublishing}</span>
                    </p>

                    <p className='text-[1rem] text-[#131313]/70 '>
                        Rating:
                        <span className='ml-[139px] md:ml-[149px] font-semibold text-[#131313]'>{rating}</span>
                    </p>

                </div>

                {/* Card btn */}
                <div className='flex items-center gap-4 mt-8'>
                    <button className='btn btn-ghost button3'>Read</button>
                    <button className='btn btn-ghost button2'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;