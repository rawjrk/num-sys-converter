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

export default Options;
