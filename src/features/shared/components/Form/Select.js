import styled from "styled-components";

const selectArrow = (currentColor = "#000") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${currentColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

const Select = styled.select`
  border: var(--border);
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.font.primary};
  font-size: 1rem;

  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,${(props) =>
    encodeURIComponent(selectArrow(props.theme.colors.font.primary))}");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;
`;

export default Select;
