import PropTypes from "prop-types";
import { useState } from "react";

const SortedBooksDropdown = ({
  dropdownValues,
  handleSelectedCategory,
  selectedCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    handleSelectedCategory(option);
    setIsOpen(false);
  };

  return (
    <div className="text-center mb-6 lg:mb-14">
      <details className="dropdown">
        <summary
          tabIndex={0}
          onClick={toggleDropdown}
          className="m-1 btn bg-[#23BE0A] text-white"
        >
          {selectedCategory ? selectedCategory : "Sort By"}
          <svg
            className={`size-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>
        <ul
          tabIndex={0}
          className={`p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52`}
        >
          {dropdownValues &&
            dropdownValues.map((value, idx) => (
              <li key={idx}>
                <span onClick={() => handleOptionClick(`${value}`)}>
                  {value}
                </span>
              </li>
            ))}
        </ul>
      </details>
    </div>
  );
};

SortedBooksDropdown.propTypes = {
  dropdownValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectedCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string,
};

export default SortedBooksDropdown;
