import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllReadListFromLocalDB } from '../utils/localDB';

export const BookContext = createContext()

const BookProvider = ({ children }) => {

    // handle read books
    const [readList, setReadList] = useState(()=> getAllReadListFromLocalDB());

    const handleReadBooks = (readBook) => {

        // validate the book
        const isExist = readList.find(storedBook => readBook.bookId === storedBook.bookId);
        
        if(isExist){
            toast.warn('The book is already exist');
        }
        else{
            setReadList([...readList, readBook]);
            toast.success(`${readBook.bookName} is add to list.`)
        }

        
    }

    // handle wishlist books
    const [wishList, setWishList] = useState([]);

    const handleListedBooks = (wishBook) => {

        // validate the book is on read list or not.
        const isExist = readList.find(storedBook => wishBook.bookId === storedBook.bookId);

        // validate this book is already your wishlist.
        const isWishlist = wishList.find(listedBook => wishBook.bookId === listedBook.bookId);

        if(isExist){
            toast.error('The book is already in your read list.');
            return;
        }
        else if(isWishlist){
            toast.warn(`The book is already in your Wishlist.`)
        }
        else{
            setWishList([...wishList, wishBook]);
            toast.success(`${wishBook.bookName} is add to your wishlist.`)
        }

        
    }

    const test = {
        handleReadBooks,
        readList,
        setReadList,
        handleListedBooks,
        wishList,
        setWishList
    };

    return <BookContext.Provider value={test}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;