import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadLists from '../../components/BookList/ReadLists';
import WishLists from '../../components/BookList/WishLists';
import { IoIosArrowDown } from 'react-icons/io';

const BookPage = () => {

    // sort
    const [sortingType, setSortingType] = useState("");

    // read list wish list
    const { readList, wishList } = useContext(BookContext);

    // console.log(storedBooks);
    return (
        <div>

            {/* page title */}
            <div className='bg-[#131313]/5 h-25 max-w-[1169px] mx-auto flex justify-center items-center mt-8 rounded-2xl '>
                <h1 className='text-[1.75rem] font-bold'>Books</h1>
            </div>

            {/* Sorting btn */}
            <div className='text-center mt-8'>
                {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                {/* For TSX uncomment the commented types below */}
                <button className="btn button1" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                    Sort by <IoIosArrowDown />
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                    <li onClick={() => setSortingType('pages')}><a>Pages</a></li>
                    <li onClick={() => setSortingType('rating')}><a>Rating</a></li>
                </ul>
            </div>

            {/* tab list */}

            <div className='max-w-[1170px] mx-auto mb-20'>

                <Tabs>
                    <TabList>
                        <Tab>Readlist</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>

                    <TabPanel>

                        {
                            <ReadLists readList={readList} sortingType={sortingType} />
                        }

                    </TabPanel>

                    <TabPanel>

                        {
                            <WishLists sortingType={sortingType} wishList={wishList}/>
                        }

                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default BookPage;