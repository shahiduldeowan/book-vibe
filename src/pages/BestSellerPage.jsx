import { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import BookGridItemCard from "../components/Book/BookGridItemCard";
import Loader from "../components/Loader/Loader";

const BestSellerPage = () => {
  const [bestSellerBooks, setBestSellerBooks] = useState([]);
  const books = useLoaderData();
  const navigation = useNavigation();

  useEffect(() => {
    const myBooks = books
      .filter((book) => book.totalPages > 353)
      .map((book, index) => ({
        ...book,
        ...{ sold: (index + 1) * book.totalPages },
      }));
    myBooks.sort((a, b) => b.sold - a.sold);
    setBestSellerBooks(myBooks);
  }, [books]);

  console.log("bestSellerBooks :>> ", bestSellerBooks);

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bestSellerBooks &&
          bestSellerBooks.map((book, index) => {
            return (
              <BookGridItemCard
                index={index + 1}
                book={book}
                key={book.bookId}
              />
            );
          })}
      </div>
    </section>
  );
};

export default BestSellerPage;
