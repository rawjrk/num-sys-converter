import styled from "styled-components";

const Input = styled.input`
  border: var(--border);
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.font.primary};
  font-size: 1rem;

  :disabled {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export default Input;
