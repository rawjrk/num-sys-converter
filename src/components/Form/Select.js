import styled from "styled-components";

const Select = styled.select`
  border: var(--border);
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.font.primary};
  font-size: 1rem;

  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;
`;

export default Select;
