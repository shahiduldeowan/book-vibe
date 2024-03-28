import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilledButton from "../components/Button/FilledButton";
import Loader from "../components/Loader/Loader";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import TagItem from "../components/Tag/TagItem";
import { storedReadBooks, storedWishlistBooks } from "../utils";

const BookDetailsPage = () => {
  const [book, setBook] = useState({});
  const params = useParams();
  const navigation = useNavigation();
  const bookDetailsLoaded = useLoaderData();

  const {
    bookName,
    author,
    image,
    tags,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    bookId,
  } = book;

  useEffect(() => {
    const id = parseInt(params.id || "1");
    const queryBook = bookDetailsLoaded.find((item) => item.bookId === id);
    setBook(queryBook);
  }, [bookDetailsLoaded, params]);

  const handleRead = () => {
    const storedBooks = storedReadBooks(bookId);
    if (storedBooks.status) {
      toast.success(storedBooks.message);
    } else {
      toast.warn(storedBooks.message);
    }
  };

  const handleWishlist = () => {
    const storedBooks = storedWishlistBooks(bookId);
    if (storedBooks.status) {
      toast.success(storedBooks.message);
    } else {
      toast.warn(storedBooks.message);
    }
  };

  if (navigation.state === "loading") {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 xl:gap-12">
      <div className="w-full lg:w-5/12 xl:w-4/12 h-96 md:h-[540px] lg:h-[610px] bg-[#1313130D] rounded-2xl">
        <img
          src={image}
          alt={bookName}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full lg:w-7/12 xl:w-8/12">
        <SectionTitle title={bookName} alignment="text-left" />
        <h4 className=" text-xl font-medium mb-3 lg:mb-5">By : {author}</h4>
        <hr className="border border-[#13131326]" />
        <h4 className="text-[#131313CC] text-xl font-medium my-2 lg:my-4">
          {category}
        </h4>
        <hr className="border border-[#13131326]" />
        <p className="text-[#131313B3] mt-3 lg:mt-6 mb-6 lg:mb-12">
          <span className="text-[#131313] font-bold">Review : </span>
          {review}
        </p>
        <div className="flex flex-wrap gap-3 items-center mb-3 lg:mb-6">
          <span>Tag</span>
          {tags && tags.map((tag, idx) => <TagItem key={idx} tag={tag} />)}
        </div>
        <hr className="border border-[#13131326]" />
        <div className="mt-3 lg:mt-6 mb-3 md:mb-6 lg:mb-7 flex gap-3 flex-col">
          <BulletItem label="Number of Pages" value={totalPages} />
          <BulletItem label="Publisher" value={publisher} />
          <BulletItem label="Year of Publishing" value={yearOfPublishing} />
          <BulletItem label="Rating" value={rating} />
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleRead}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-lg text-black hover:text-white border border-[#1313134D] hover:border-[#23BE0A] bg-transparent hover:bg-[#23BE0A]"
          >
            Read
          </button>
          <FilledButton
            onClick={handleWishlist}
            label="Wishlist"
            isPrimary={false}
          />
        </div>
      </div>
    </div>
  );
};

const BulletItem = ({ label, value }) => {
  return (
    <div className="flex gap-6 lg:gap-12 items-center">
      <div className=" w-40">
        <p className="text-[#131313B3]">{label}:</p>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  );
};

BulletItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default BookDetailsPage;
