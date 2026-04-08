import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const BookPage = () => {

    const { storedBooks, listedBooks } = useContext(BookContext);

    // console.log(storedBooks);
    return (
        <div>
            <h1>Books</h1>
            <Tabs>
                <TabList>
                    <Tab>Readlist</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>Readlist: {storedBooks.length} </h2>
                </TabPanel>

                <TabPanel>
                    <h2>Wishlist: {listedBooks.length} </h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BookPage;