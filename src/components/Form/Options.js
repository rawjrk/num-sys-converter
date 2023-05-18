import PropTypes from "prop-types";

function Options({ options = [] }) {
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

export const optionsPropType = PropTypes.arrayOf(
  PropTypes.exact({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })
);

Options.propTypes = {
  options: optionsPropType,
};

Options.defaultProps = {
  options: [],
};

export default Options;
