import PropTypes from "prop-types";

function Options({ options }) {
  return (
    <>
      {options.map((option) => (
        <option value={option.value} id={option.value} key={option.value}>
          {option.title}
        </option>
      ))}
    </>
  );
}

Options.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
};

Options.defaultProps = {
  options: [],
};

export default Options;
