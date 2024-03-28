import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ListedBooksHeader from "../components/ListedBooks/ListedBooksHeader";
import ListedBooksTab from "../components/ListedBooks/ListedBooksTab";
import SortedBooksDropdown from "../components/ListedBooks/SortedBooksDropdown";
import { getReadBooks, getWishlistBooks } from "../utils";

export const SortedBooksContext = createContext([]);
export const SelectedCategoryContext = createContext("");

const ListedBooksPage = () => {
  const [sortedBooks, setSortedBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const loadedBooks = useLoaderData();

  const handleSelectedCategory = (option) => {
    setSelectedCategory(option);
  };

  useEffect(() => {
    const storedBooksId = [...getReadBooks(), ...getWishlistBooks()];
    if (!storedBooksId) {
      setSortedBooks([]);
    } else {
      const myBooks = loadedBooks.filter((book) => {
        return storedBooksId.find((item) => item === book.bookId);
      });
      if (myBooks && myBooks.length > 0) {
        setSortedBooks(myBooks);
      } else {
        setSortedBooks([]);
      }
    }
  }, [loadedBooks, selectedCategory]);

  return (
    <>
      <ListedBooksHeader />
      <SortedBooksDropdown
        selectedCategory={selectedCategory}
        handleSelectedCategory={handleSelectedCategory}
        dropdownValues={["Rating", "Number of pages", "Publisher year"]}
      />
      <SortedBooksContext.Provider value={sortedBooks}>
        <SelectedCategoryContext.Provider value={selectedCategory}>
          <ListedBooksTab />
        </SelectedCategoryContext.Provider>
      </SortedBooksContext.Provider>
    </>
  );
};

export default ListedBooksPage;
