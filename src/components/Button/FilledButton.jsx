import PropTypes from "prop-types";

const FilledButton = ({ label, onClick, isHidden, isPrimary = true }) => {
  const styleClass = getButtonStyleClass(isPrimary);

  return (
    <button
      onClick={onClick}
      className={`${styleClass} ${isHidden ? "hidden" : ""} lg:flex`}
    >
      {label}
    </button>
  );
};

const getButtonStyleClass = (isPrimary) => {
  if (isPrimary) {
    return `btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-lg border border-transparent hover:border-[#23be0a] text-white bg-[#23be0a] hover:bg-transparent hover:text-[#23be0a]`;
  }
  return `btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-lg border border-transparent hover:border-[#59c6d2] text-white bg-[#59c6d2] hover:bg-transparent hover:text-[#59c6d2]`;
};

FilledButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isHidden: PropTypes.bool,
  isPrimary: PropTypes.bool,
};

export default FilledButton;
