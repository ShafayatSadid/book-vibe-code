import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const books = useLoaderData()
    const {id} = useParams();
    
    const expectedBook = books.find(book => book.bookId == id);
    console.log(expectedBook)
    return (
        <div>
            <h2>Book Details</h2>
        </div>
    );
};

export default BookDetails;