import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooksTab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="">
      <div className="flex items-start overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-[#13131380] mb-6 lg:mb-8">
        <Link
          to={""}
          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-gray-300  rounded-t-lg ${
            tabIndex === 0
              ? "text-[#131313CC] border border-b-0"
              : "text-gray-400 border-b"
          }`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={"wishlist"}
          onClick={() => setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg border-gray-300  ${
            tabIndex === 1
              ? "text-[#131313CC] border border-b-0"
              : "text-gray-400 border-b"
          }`}
        >
          <span>Wishlist Books</span>
        </Link>
        <div className="flex-1 flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-300 text-transparent">
          a
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ListedBooksTab;
