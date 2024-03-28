import PropTypes from "prop-types";

const TagItem = ({ tag }) => {
  return (
    <div className="rounded-full bg-[#23BE0A0D] py-2 px-4">
      <span className=" font-medium text-[#23BE0A]">{tag}</span>
    </div>
  );
};

TagItem.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default TagItem;
