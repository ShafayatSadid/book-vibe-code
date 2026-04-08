import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()

const BookProvider = ({ children }) => {

    // handle read books
    const [storedBooks, setStoredBooks] = useState([]);

    const handleReadBooks = (readBook) => {

        // validate the book
        const isExist = storedBooks.find(storedBook => readBook.bookId === storedBook.bookId);
        
        if(isExist){
            toast.warn('The book is already exist');
        }
        else{
            setStoredBooks([...storedBooks, readBook]);
            toast.success(`${readBook.bookName} is add to list.`)
        }

        
    }

    // handle listed books
    const [listedBooks, setListedBooks] = useState([]);

    const handleListedBooks = (wishBook) => {

        // validate the book is on read list or not.
        const isExist = storedBooks.find(storedBook => wishBook.bookId === storedBook.bookId);

        // validate this book is already your wishlist.
        const isWishlist = listedBooks.find(listedBook => wishBook.bookId === listedBook.bookId);

        if(isExist){
            toast.error('The book is already in your read list.');
            return;
        }
        else if(isWishlist){
            toast.warn(`The book is already in your Wishlist.`)
        }
        else{
            setListedBooks([...listedBooks, wishBook]);
            toast.success(`${wishBook.bookName} is add to your wishlist.`)
        }

        
    }

    const test = {
        handleReadBooks,
        storedBooks,
        setStoredBooks,
        handleListedBooks,
        listedBooks,
        setListedBooks
    };

    return <BookContext.Provider value={test}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;