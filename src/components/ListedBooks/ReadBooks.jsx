import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  SelectedCategoryContext,
  SortedBooksContext,
} from "../../pages/ListedBooksPage";
import ListedBook from "./ListedBook";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  const sortedBooks = useContext(SortedBooksContext);
  const selectedCategory = useContext(SelectedCategoryContext);
  const loadedIds = useLoaderData();

  useEffect(() => {
    if (loadedIds && loadedIds.length > 0) {
      const myBooks = loadedIds.map((id) =>
        sortedBooks.find((book) => book.bookId === id)
      );
      if (selectedCategory) {
        if (selectedCategory === "Rating") {
          myBooks.sort((a, b) => b.rating - a.rating);
        }
        if (selectedCategory === "Number of pages") {
          myBooks.sort((a, b) => b.totalPages - a.totalPages);
        }
        if (selectedCategory === "Publisher year") {
          myBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
      }
      setBooks(myBooks);
    }
  }, [loadedIds, sortedBooks, selectedCategory]);

  return (
    <div className="flex flex-col gap-6">
      {books &&
        books.map((book, idx) => {
          return <ListedBook key={idx} book={book} />;
        })}
    </div>
  );
};

export default ReadBooks;
