import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { SortedBooksContext } from "../../pages/ListedBooksPage";

const WishlistBooks = () => {
  const [books, setBooks] = useState([]);
  const sortedBooks = useContext(SortedBooksContext);
  const loadedIds = useLoaderData();

  useEffect(() => {
    if (loadedIds && loadedIds.length > 0) {
      const myBooks = loadedIds.map((id) =>
        sortedBooks.find((book) => book.bookId === id)
      );
      setBooks(myBooks);
    }
  }, [loadedIds, sortedBooks]);

  return <div className="flex flex-col gap-6">{books.length}</div>;
};

export default WishlistBooks;
