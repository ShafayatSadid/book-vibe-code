import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const BookPage = () => {

    const {storedBooks} = useContext(BookContext);

    console.log(storedBooks);
    return (
        <div>
            <h1>Books</h1>
        </div>
    );
};

export default BookPage;