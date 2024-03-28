import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import StarIcon from "../../assets/star.svg";
import TagItem from "../Tag/TagItem";

const BookGridItemCard = ({ book }) => {
  const { bookName, author, image, tags, category, rating, bookId } = book;
  const navigate = useNavigate();

  const handleCardItem = () => {
    navigate(`/book-details/${bookId}`);
  };

  return (
    <div
      onClick={handleCardItem}
      className="border border-[#13131326] rounded-2xl p-6 cursor-pointer transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="w-full h-56 bg-[#F3F3F3] rounded-2xl mb-6">
        <img
          className="w-full h-full object-cover object-center rounded-2xl"
          src={image}
          alt={`${bookName} image`}
        />
      </div>
      <div className="flex flex-wrap gap-3 mb-4">
        {tags && tags.map((tag, idx) => <TagItem key={idx} tag={tag} />)}
      </div>
      <h3 className="font-playfair-display text-2xl font-bold mb-4">
        {bookName}
      </h3>
      <p className="font-medium text-[#131313CC] mb-5">by : {author}</p>
      <hr className="border border-[#13131326] border-dashed mb-5" />
      <div className="flex justify-between text-[#131313CC] font-medium">
        <span>{category}</span>
        <div className="flex gap-2">
          <span>{rating}</span>
          <img src={StarIcon} alt="Star Icon" />
        </div>
      </div>
    </div>
  );
};

BookGridItemCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookGridItemCard;
