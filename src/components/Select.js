import Form from "react-bootstrap/Form";

function Select({
  className,
  label,
  options,
  defaultOption,
  ariaLabel,
  disabled = false,
  onChange = (f) => f,
}) {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        aria-label={ariaLabel}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option
            value={option.value}
            selected={option.value === defaultOption}
          >
            {option.title}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default Select;
