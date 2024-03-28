import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ListedBooksHeader from "../components/ListedBooks/ListedBooksHeader";
import ListedBooksTab from "../components/ListedBooks/ListedBooksTab";
import SortedBooksDropdown from "../components/ListedBooks/SortedBooksDropdown";

export const SortedBooksContext = createContext([]);

const ListedBooksPage = () => {
  const [sortedBooks, setSortedBooks] = useState([]);
  const [dropdownValues, setDropdownValues] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const loadedBooks = useLoaderData();

  const handleSelectedCategory = (option) => {
    setSelectedCategory(option);
  };

  useEffect(() => {
    setDropdownValues(loadedBooks.map((book) => book.category));
    if (selectedCategory) {
      const myBooks = loadedBooks.filter(
        (book) => book.category === selectedCategory
      );
      if (myBooks && myBooks.length > 0) {
        setSortedBooks(myBooks);
      }
    } else {
      setSortedBooks(loadedBooks);
    }
  }, [loadedBooks, selectedCategory]);

  return (
    <>
      <ListedBooksHeader />

      <SortedBooksDropdown
        selectedCategory={selectedCategory}
        handleSelectedCategory={handleSelectedCategory}
        dropdownValues={dropdownValues}
      />
      <SortedBooksContext.Provider value={sortedBooks}>
        <ListedBooksTab />
      </SortedBooksContext.Provider>
    </>
  );
};

export default ListedBooksPage;
