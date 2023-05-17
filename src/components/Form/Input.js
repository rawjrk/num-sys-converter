import styled from "styled-components";

const Input = styled.input`
  border: var(--border);
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: var(--bg-primary);
  font-size: 1rem;
  color: var(--text-primary);

  :disabled {
    background-color: var(--bg-secondary);
  }
`;

export default Input;
