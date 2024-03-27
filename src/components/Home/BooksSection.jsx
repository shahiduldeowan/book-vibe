import { useLoaderData, useNavigation } from "react-router-dom";
import BookGridItemCard from "../Book/BookGridItemCard";
import Loader from "../Loader/Loader";
import SectionTitle from "../SectionTitle/SectionTitle";

const BooksSection = () => {
  const books = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <>
      <SectionTitle title="Books" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => {
          return <BookGridItemCard book={book} key={book.bookId} />;
        })}
      </div>
    </>
  );
};

export default BooksSection;
