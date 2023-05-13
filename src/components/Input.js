import Form from "react-bootstrap/Form";

function Input({
  className,
  label,
  type,
  placeholder,
  disabled = false,
  value,
  onChange = (f) => f,
}) {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
}

export default Input;
