import React, { useEffect, useState } from 'react';
import WishListCard from './WishListCard';


const WishLists = ({ wishList, sortingType }) => {

    // filtered data
    const [filteredList, setFilteredList] = useState(wishList);

    useEffect(() => {
        if (sortingType) {
            if (sortingType === 'pages') {
                const sortedData = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
                setFilteredList(sortedData);
            }
            else if (sortingType === 'rating') {
                const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
                setFilteredList(sortedData);

            }
        }


    }, [sortingType, wishList])
    return (
        <div>
            {
                filteredList.map(book => <WishListCard book={book} key={book.bookId} />)
            }
        </div>
    );
};

export default WishLists;