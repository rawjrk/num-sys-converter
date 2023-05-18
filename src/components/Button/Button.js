import styled from "styled-components";

const Button = styled.button`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.4rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.font.primary};
  font-size: 1rem;

  :hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  :active {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.active};
  }
`;

export default Button;
