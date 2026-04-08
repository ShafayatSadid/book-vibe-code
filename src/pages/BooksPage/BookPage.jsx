import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadLists from '../../components/BookList/ReadLists';
import WishLists from '../../components/BookList/WishLists';

const BookPage = () => {

    const { readList, wishList } = useContext(BookContext);

    // console.log(storedBooks);
    return (
        <div>
            

            <div className='max-w-[1170px] mx-auto mb-20'>

                <Tabs>
                    <TabList>
                        <Tab>Readlist</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>

                    <TabPanel>
                        <div className=''>
                            {
                                readList.map(book => <ReadLists key={book.bookId} book={book} />)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div>
                            {
                                wishList.map(book => <WishLists key={book.bookId} book={book} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default BookPage;