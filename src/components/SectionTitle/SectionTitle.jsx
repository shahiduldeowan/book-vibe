import PropTypes from "prop-types";

const SectionTitle = ({ title, alignment = "text-center" }) => {
  return (
    <h2
      className={`${alignment} text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-10`}
    >
      {title}
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  alignment: PropTypes.string,
};

export default SectionTitle;
