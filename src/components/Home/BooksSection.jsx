import { useLoaderData } from "react-router-dom";
import Loader from "../Loader/Loader";
import SectionTitle from "../SectionTitle/SectionTitle";

const BooksSection = () => {
  const books = useLoaderData();
  console.log("books :>> ", books);
  if (books) {
    return <Loader />;
  }
  return (
    <>
      <SectionTitle title="Books" />
    </>
  );
};

export default BooksSection;
