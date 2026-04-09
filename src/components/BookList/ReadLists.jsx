import React, { useEffect, useState } from 'react';
import ReadListCard from './ReadListCard';

const ReadLists = ({ readList, sortingType }) => {

    // filtered data
    const [filteredList, setFilteredList] = useState(readList);

    useEffect(() => {
        if (sortingType) {
            if (sortingType === 'pages') {
                const sortedData = [...readList].sort((a, b) => a.totalPages - b.totalPages);
                setFilteredList(sortedData);
            }
            else if (sortingType === 'rating') {
                const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
                setFilteredList(sortedData);
                
            }
        }


    }, [sortingType, readList])

    return (
        <div>
            {
                filteredList.map(book => <ReadListCard book={book} key={book.bookId} />)
            }
        </div>
    );
};

export default ReadLists;