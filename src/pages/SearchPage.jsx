import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookGridItemCard from "../components/Book/BookGridItemCard";

const SearchPage = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const books = useLoaderData();

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleInputOnChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    if (!inputValue) {
      setFilteredBooks(books);
      return;
    }

    const myFilteredBooks = books.filter(
      (book) => book.bookName.toLowerCase().indexOf(inputValue) !== -1
    );
    setFilteredBooks(myFilteredBooks);
  };

  return (
    <section>
      <div className="flex justify-center items-center mb-12">
        <div className="">
          <fieldset className="w-full space-y-1 text-gray-100">
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 text-[#23BE0A]"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                onChange={handleInputOnChange}
                type="search"
                name="Search"
                placeholder="Product Name..."
                className="w-32 py-2 pl-10 text-sm text-black rounded-md sm:w-auto focus:outline-none bg-[#1313130D]  focus:bg-[#1313130D] focus:border-[#23BE0A]"
              />
            </div>
          </fieldset>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks &&
          filteredBooks.map((book) => {
            return <BookGridItemCard book={book} key={book.bookId} />;
          })}
      </div>
    </section>
  );
};

export default SearchPage;
