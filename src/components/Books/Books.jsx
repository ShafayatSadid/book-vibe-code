import React, { use } from 'react';
import BookCard from './BookCard';

const bookPromise = fetch('/booksData.json').then(res => res.json());

const Books = () => {

    const books = use(bookPromise);

    return (
        <div>
            <h2 className='playfair text-[2.5rem] text-[#131313] font-bold mt-25 text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-292.5 mx-auto gap-6 mt-9'>


                {
                    books.map(book => <BookCard book={book} key={book.bookId} />)
                }
            </div>
        </div>
    );
};

export default Books;